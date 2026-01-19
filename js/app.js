/**
 * Main Application Logic
 * Version 1.4.0
 */

/**
 * Convert SVG string to PNG data URL
 * @param {string} svgString - The SVG markup string
 * @returns {Promise<string>} - A promise that resolves to a PNG data URL
 */
async function convertSvgToPng(svgString) {
    return new Promise((resolve, reject) => {
        // Create a temporary container to measure the exact bounding box of the SVG content
        // This is necessary because Mermaid's default viewBox calculation might be slightly off
        // or exclude some overflow content (like text labels).
        const container = document.createElement('div');
        container.style.position = 'absolute';
        container.style.top = '-9999px';
        container.style.left = '-9999px';
        container.style.visibility = 'hidden'; // Render it but hide it
        container.innerHTML = svgString;
        document.body.appendChild(container);

        const svgElement = container.querySelector('svg');
        if (!svgElement) {
            document.body.removeChild(container);
            reject(new Error('Invalid SVG'));
            return;
        }

        // Get the exact bounding box of the content
        // This accounts for all elements, including those translated outside the original viewBox
        const bbox = svgElement.getBBox();

        // Remove container after measurement
        document.body.removeChild(container);

        // Calculate new dimensions with extra generous padding to prevent any text clipping
        // Emojis often render wider than reported by getBBox in some environments
        const paddingX = 50;
        const paddingY = 20;
        const x = bbox.x - paddingX;
        const y = bbox.y - paddingY;
        const width = bbox.width + paddingX * 2;
        const height = bbox.height + paddingY * 2;

        // Parse the SVG string again to modify it for export
        // (We manipulate a fresh DOM parser instance to avoid side effects from the previous one)
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');
        const exportSvg = svgDoc.querySelector('svg');

        // Set the new viewBox to match the exact content bounds
        exportSvg.setAttribute('viewBox', `${x} ${y} ${width} ${height}`);

        // Set physical size to match content size
        exportSvg.setAttribute('width', width);
        exportSvg.setAttribute('height', height);

        // Ensure no overflow clipping
        exportSvg.style.overflow = 'visible';

        // Add white background rect
        // It must cover the entire new viewBox area
        const bgRect = svgDoc.createElementNS('http://www.w3.org/2000/svg', 'rect');
        bgRect.setAttribute('x', x);
        bgRect.setAttribute('y', y);
        bgRect.setAttribute('width', width);
        bgRect.setAttribute('height', height);
        bgRect.setAttribute('fill', 'white');

        // Insert background as the first child
        if (exportSvg.firstChild) {
            exportSvg.insertBefore(bgRect, exportSvg.firstChild);
        } else {
            exportSvg.appendChild(bgRect);
        }

        // Serialize the optimized SVG
        const serializer = new XMLSerializer();
        const modifiedSvgString = serializer.serializeToString(svgDoc);

        // Create image for Canvas drawing
        const img = new Image();
        const base64Svg = btoa(unescape(encodeURIComponent(modifiedSvgString)));
        const dataUrl = `data:image/svg+xml;base64,${base64Svg}`;

        img.onload = () => {
            const scale = 3; // High resolution
            const canvas = document.createElement('canvas');
            canvas.width = width * scale;
            canvas.height = height * scale;

            const ctx = canvas.getContext('2d');

            // Fill background white
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw image filling the canvas
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            const pngDataUrl = canvas.toDataURL('image/png', 1.0);
            resolve(pngDataUrl);
        };

        img.onerror = (err) => {
            console.error('Failed to load SVG image for conversion', err);
            reject(err);
        };

        img.src = dataUrl;
    });
}

// Initialize Mermaid with proper configuration for complex diagrams
if (typeof mermaid !== 'undefined') {
    mermaid.initialize({
        startOnLoad: false,  // We manually render
        theme: 'default',
        securityLevel: 'loose',  // Allow HTML in labels (needed for <br/> etc.)
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: 'basis'
        },
        sequence: {
            useMaxWidth: true
        },
        gantt: {
            useMaxWidth: true
        },
        stateDiagram: {
            useMaxWidth: true
        },
        suppressErrorRendering: false,  // Show errors for debugging
        logLevel: 'error'
    });
    console.log('Mermaid initialized with configuration');
}

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

        // Re-render Mermaid diagrams and convert to PNG for better compatibility
        if (typeof mermaid !== 'undefined') {
            const mermaidElements = previewEl.querySelectorAll('.mermaid');
            console.log(`Found ${mermaidElements.length} mermaid elements to render`);

            for (let i = 0; i < mermaidElements.length; i++) {
                const el = mermaidElements[i];
                // Get and clean the code
                let code = el.textContent || el.innerText;
                code = code.trim();

                // Skip empty code blocks
                if (!code) {
                    console.warn(`Mermaid element ${i} is empty, skipping`);
                    continue;
                }

                // Generate unique ID for each diagram
                const id = `mermaid-diagram-${Date.now()}-${i}`;
                console.log(`Rendering mermaid diagram ${i}:`, code.substring(0, 100) + '...');

                try {
                    // Use mermaid.render() for explicit control
                    const { svg } = await mermaid.render(id, code);
                    console.log(`Mermaid diagram ${i} rendered successfully`);

                    // Convert SVG to PNG
                    const pngDataUrl = await convertSvgToPng(svg);

                    // Replace the mermaid element with an img tag
                    el.innerHTML = `<img src="${pngDataUrl}" alt="Mermaid Diagram" style="max-width: 100%; height: auto; display: block; margin: 10px auto;">`;
                } catch (err) {
                    console.error(`Mermaid render error for diagram ${i}:`, err);
                    console.error('Failed code:', code);
                    const shortCode = code.substring(0, 50).replace(/</g, '&lt;').replace(/>/g, '&gt;');
                    el.innerHTML = `<div style="color: red; padding: 10px; border: 1px solid red; background: #fff0f0;">
                        <strong>Mermaid 语法错误:</strong> ${err.message || err}<br/>
                        <small style="color: #666;">代码片段: ${shortCode}...</small>
                    </div>`;
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
    const mobileBtn = document.getElementById('view-mobile-btn');
    const pcBtn = document.getElementById('view-pc-btn');
    const previewContainer = document.querySelector('.mobile-mockup');

    if (mobileBtn && pcBtn && previewContainer) {
        mobileBtn.addEventListener('click', () => {
            previewContainer.classList.remove('pc-view');
            mobileBtn.classList.add('active');
            pcBtn.classList.remove('active');
        });

        pcBtn.addEventListener('click', () => {
            previewContainer.classList.add('pc-view');
            pcBtn.classList.add('active');
            mobileBtn.classList.remove('active');
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
