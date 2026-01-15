/**
 * Main Application Logic
 * Version 1.4.0
 */

document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const editorEl = document.getElementById('markdown-editor');
    const previewEl = document.getElementById('preview-content');
    const themeSelect = document.getElementById('theme-select');
    const copyBtn = document.getElementById('copy-btn');
    const fileInput = document.getElementById('file-input');
    const notification = document.getElementById('notification');
    const charCountEl = document.getElementById('char-count');
    const wordCountEl = document.getElementById('word-count-num');
    const exportBtn = document.getElementById('export-btn');

    // Initialize Editor Logic (from editor.js)
    if (typeof initEditor === 'function') {
        initEditor();
    }

    // Current theme
    let currentTheme = themes.default;
    // Load saved theme if any
    const savedTheme = localStorage.getItem('md2wechat_theme');
    if (savedTheme && themes[savedTheme]) {
        currentTheme = themes[savedTheme];
    }

    // Load saved content (auto-save feature)
    const savedContent = localStorage.getItem('md2wechat_content');
    if (savedContent) {
        editorEl.value = savedContent;
    }

    // Initialize theme dropdown
    function initThemeSelect() {
        const themeList = getThemeList();
        themeList.forEach(theme => {
            const option = document.createElement('option');
            option.value = theme.id;
            option.textContent = theme.name;
            if (theme.id === currentTheme.id || (savedTheme && theme.id === savedTheme)) {
                option.selected = true;
            }
            themeSelect.appendChild(option);
        });
    }

    // Update word count
    function updateWordCount() {
        const text = editorEl.value;
        const charCount = text.length;

        // Count Chinese characters and words
        // Remove code blocks and inline code for accurate count
        const cleanText = text
            .replace(/```[\s\S]*?```/g, '')
            .replace(/`[^`]*`/g, '')
            .replace(/\[.*?\]\(.*?\)/g, '') // Remove links
            .replace(/[#*_~>\-\[\]()!]/g, ''); // Remove markdown symbols

        // Chinese word count (each character is a word)
        const chineseChars = (cleanText.match(/[\u4e00-\u9fa5]/g) || []).length;
        // English word count
        const englishWords = cleanText
            .replace(/[\u4e00-\u9fa5]/g, ' ')
            .split(/\s+/)
            .filter(word => word.length > 0).length;

        const wordCount = chineseChars + englishWords;

        if (charCountEl) charCountEl.textContent = charCount;
        if (wordCountEl) wordCountEl.textContent = wordCount;
    }

    // Auto-save content
    function autoSave() {
        localStorage.setItem('md2wechat_content', editorEl.value);
    }

    // Update preview with converted HTML
    async function updatePreview() {
        const markdown = editorEl.value;
        const html = converter.convert(markdown, currentTheme);
        previewEl.innerHTML = html;

        // Update word count
        updateWordCount();

        // Auto-save
        autoSave();

        // Re-render Mermaid diagrams using the render() API for better control
        if (typeof mermaid !== 'undefined') {
            const mermaidElements = previewEl.querySelectorAll('.mermaid');

            for (let i = 0; i < mermaidElements.length; i++) {
                const el = mermaidElements[i];
                const code = el.textContent || el.innerText;

                // Generate unique ID for each diagram
                const id = `mermaid-diagram-${Date.now()}-${i}`;

                try {
                    // Use mermaid.render() for explicit control
                    const { svg } = await mermaid.render(id, code);

                    // Inject white background into SVG for WeChat compatibility
                    let modifiedSvg = svg;
                    const svgMatch = modifiedSvg.match(/<svg[^>]*>/);
                    if (svgMatch) {
                        const bgRect = '<rect width="100%" height="100%" fill="white"/>';
                        modifiedSvg = modifiedSvg.replace(svgMatch[0], svgMatch[0] + bgRect);
                    }

                    // Wrap in container with white background as fallback
                    el.innerHTML = `<div style="background: #ffffff; padding: 10px; display: inline-block;">${modifiedSvg}</div>`;
                } catch (err) {
                    console.error('Mermaid render error:', err);
                    el.innerHTML = `<div style="color: red; padding: 10px; border: 1px solid red; background: #fff0f0;">Mermaid 语法错误: ${err.message || err}</div>`;
                }
            }
        }
    }

    // Show notification
    function showNotification(message, type = 'success') {
        notification.textContent = message;
        notification.className = `notification ${type} show`;
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // Copy to clipboard
    async function copyToClipboard() {
        const html = previewEl.innerHTML;
        if (!html.trim()) {
            showNotification('请先输入内容', 'error');
            return;
        }

        try {
            // Priority: Clipboard API with Blob
            if (navigator.clipboard && typeof ClipboardItem !== 'undefined') {
                const blob = new Blob([html], { type: 'text/html' });
                // Also create a plain text version
                const plainBlob = new Blob([previewEl.innerText], { type: 'text/plain' });

                await navigator.clipboard.write([
                    new ClipboardItem({
                        'text/html': blob,
                        'text/plain': plainBlob
                    })
                ]);
                showNotification('已复制，可直接粘贴到公众号');
            } else {
                throw new Error('Clipboard API not supported');
            }
        } catch (err) {
            console.warn('Clipboard API failed, fallback to Select+Copy command', err);
            // Fallback: Select and Copy
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(previewEl);
            selection.removeAllRanges();
            selection.addRange(range);

            try {
                document.execCommand('copy');
                showNotification('已复制，可直接粘贴到公众号');
            } catch (e) {
                showNotification('复制失败，请尝试手动复制', 'error');
            }
            selection.removeAllRanges();
        }
    }

    // Export HTML function
    function exportHTML() {
        const html = previewEl.innerHTML;
        if (!html.trim()) {
            showNotification('请先输入内容', 'error');
            return;
        }

        // Create a complete HTML document
        const fullHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Markdown Export</title>
    <style>
        body {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
    </style>
</head>
<body>
${html}
</body>
</html>`;

        // Create download link
        const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `markdown-export-${new Date().toISOString().slice(0, 10)}.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        showNotification('导出成功');
    }

    // Debounce factory
    function debounce(func, wait) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    // Event Listeners
    editorEl.addEventListener('input', debounce(updatePreview, 100));

    // View Toggle Logic
    const toggleBtn = document.getElementById('view-toggle-btn');
    const previewContainer = document.querySelector('.mobile-mockup');

    if (toggleBtn && previewContainer) {
        toggleBtn.addEventListener('click', () => {
            const isPc = previewContainer.classList.toggle('pc-view');
            if (isPc) {
                toggleBtn.classList.add('active');
            } else {
                toggleBtn.classList.remove('active');
            }
        });
    }

    themeSelect.addEventListener('change', function () {
        const themeKey = this.value;
        currentTheme = themes[themeKey] || themes.default;
        localStorage.setItem('md2wechat_theme', themeKey);
        updatePreview();
    });

    const uploadBtn = document.getElementById('upload-btn');

    if (uploadBtn && fileInput) {
        uploadBtn.addEventListener('click', () => {
            fileInput.click();
        });

        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;

            if (!file.name.endsWith('.md')) {
                showNotification('请上传 .md 格式的文件', 'error');
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                editorEl.value = e.target.result;
                updatePreview();
                showNotification('导入成功');
                // Reset input so same file can be selected again if needed
                fileInput.value = '';
            };
            reader.readAsText(file);
        });
    }

    // Export button
    if (exportBtn) {
        exportBtn.addEventListener('click', exportHTML);
    }

    copyBtn.addEventListener('click', copyToClipboard);

    // Initial Render
    initThemeSelect();

    // Set default content if empty and no saved content
    if (!editorEl.value.trim()) {
        editorEl.value = `# 欢迎使用 Markdown 编辑器

这里是**预览区域**。

## 功能演示
1. 支持 **粗体**、*斜体*
2. 支持 [链接](https://github.com) - 会自动转换为脚注
3. 支持代码块

\`\`\`javascript
console.log('Hello WeChat!');
\`\`\`

> 引用内容

### 任务列表
- [ ] 待完成任务
- [x] 已完成任务

试试在上方工具栏点击格式按钮，或使用快捷键！

**快捷键：**
- Ctrl/Cmd + B：粗体
- Ctrl/Cmd + I：斜体
- Ctrl/Cmd + K：链接
- Ctrl/Cmd + Shift + K：代码块
`;
    }

    updatePreview();
    updateWordCount();
});
