/**
 * Editor Logic - Toolbar & Markdown Helpers
 * Version 1.4.0
 */
class Editor {
    constructor(textarea) {
        this.textarea = textarea;
        this.history = [];
        this.historyIndex = -1;
    }

    /**
     * Insert text or wrap selection with tokens
     * @param {string} prefix - Text to insert before selection
     * @param {string} suffix - Text to insert after selection (optional)
     * @param {string} placeholder - Text to use if no selection (optional)
     */
    insert(prefix, suffix = '', placeholder = '') {
        const start = this.textarea.selectionStart;
        const end = this.textarea.selectionEnd;
        const text = this.textarea.value;
        const selection = text.substring(start, end) || placeholder;

        const before = text.substring(0, start);
        const after = text.substring(end);

        const newText = before + prefix + selection + suffix + after;

        this.textarea.value = newText;
        this.textarea.focus();

        // Reset selection to cover the wrapped text
        const newStart = start + prefix.length;
        const newEnd = newStart + selection.length;
        this.textarea.setSelectionRange(newStart, newEnd);

        // Trigger input event for preview update
        this.textarea.dispatchEvent(new Event('input'));
    }

    /**
     * Insert block level formatting (e.g. headers, list items)
     * Handles multiline selections
     */
    insertBlock(prefix) {
        const start = this.textarea.selectionStart;
        const end = this.textarea.selectionEnd;
        const text = this.textarea.value;

        // Find start of the current line
        let lineStart = text.lastIndexOf('\n', start - 1) + 1;

        const before = text.substring(0, lineStart);
        const selection = text.substring(lineStart, end);
        const after = text.substring(end);

        const newText = before + prefix + selection + after;

        this.textarea.value = newText;
        this.textarea.focus();
        this.textarea.setSelectionRange(lineStart + prefix.length, lineStart + prefix.length + selection.length);

        this.textarea.dispatchEvent(new Event('input'));
    }
}

// Global editor instance
let editorInstance;

function initEditor() {
    const textarea = document.getElementById('markdown-editor');
    if (!textarea) return;

    editorInstance = new Editor(textarea);

    // Bind toolbar buttons
    document.querySelectorAll('[data-action]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const action = btn.dataset.action;
            handleAction(action);
        });
    });

    // Bind keyboard shortcuts
    textarea.addEventListener('keydown', handleKeyboardShortcut);
}

/**
 * Handle keyboard shortcuts
 */
function handleKeyboardShortcut(e) {
    if (!editorInstance) return;

    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const modKey = isMac ? e.metaKey : e.ctrlKey;

    if (!modKey) return;

    let action = null;

    // Ctrl/Cmd + B = Bold
    if (e.key === 'b' || e.key === 'B') {
        action = 'bold';
    }
    // Ctrl/Cmd + I = Italic
    else if (e.key === 'i' || e.key === 'I') {
        action = 'italic';
    }
    // Ctrl/Cmd + K = Link
    else if (e.key === 'k' || e.key === 'K') {
        if (e.shiftKey) {
            action = 'codeblock';
        } else {
            action = 'link';
        }
    }
    // Ctrl/Cmd + 1/2/3 = Headers
    else if (e.key === '1') {
        action = 'h1';
    }
    else if (e.key === '2') {
        action = 'h2';
    }
    else if (e.key === '3') {
        action = 'h3';
    }
    // Ctrl/Cmd + Shift + X = Strikethrough
    else if ((e.key === 'x' || e.key === 'X') && e.shiftKey) {
        action = 'strike';
    }
    // Ctrl/Cmd + ` = Inline code
    else if (e.key === '`') {
        action = 'code';
    }
    // Ctrl/Cmd + > = Quote
    else if (e.key === '.' && e.shiftKey) {
        action = 'quote';
    }

    if (action) {
        e.preventDefault();
        handleAction(action);
    }
}

function handleAction(action) {
    if (!editorInstance) return;

    switch (action) {
        case 'bold':
            editorInstance.insert('**', '**', '粗体文字');
            break;
        case 'italic':
            editorInstance.insert('*', '*', '斜体文字');
            break;
        case 'strike':
            editorInstance.insert('~~', '~~', '删除线文字');
            break;
        case 'h1':
            editorInstance.insertBlock('# ');
            break;
        case 'h2':
            editorInstance.insertBlock('## ');
            break;
        case 'h3':
            editorInstance.insertBlock('### ');
            break;
        case 'quote':
            editorInstance.insertBlock('> ');
            break;
        case 'code':
            editorInstance.insert('`', '`', '代码片段');
            break;
        case 'codeblock':
            editorInstance.insert('\n```\n', '\n```\n', '代码块');
            break;
        case 'link':
            editorInstance.insert('[', '](url)', '链接文字');
            break;
        case 'image':
            editorInstance.insert('![', '](url)', '图片描述');
            break;
        case 'hr':
            editorInstance.insert('\n---\n', '');
            break;
        case 'task':
            editorInstance.insertBlock('- [ ] ');
            break;
        case 'format':
            // Format logic could go here (e.g. prettier)
            break;
    }
}
