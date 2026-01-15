/**
 * Markdown to WeChat HTML Converter
 * Uses marked.js for parsing and applies inline CSS for WeChat compatibility
 * Version 1.4.0
 */

class MarkdownConverter {
    constructor() {
        this.links = []; // 收集所有链接用于脚注
        this.linkIndex = 0;
    }

    /**
     * Reset link collection for each conversion
     */
    resetLinks() {
        this.links = [];
        this.linkIndex = 0;
    }

    /**
     * Configure marked.js with custom renderer
     */
    configureMarked(theme) {
        const styles = theme.styles;
        const self = this;

        const renderer = new marked.Renderer();

        // Headings
        renderer.heading = function (text, level) {
            const style = styles[`h${level}`] || '';
            const contentStyle = styles[`h${level}_content`] || '';
            const prefixStyle = styles[`h${level}_prefix`] || '';
            const suffixStyle = styles[`h${level}_suffix`] || '';

            let innerHTML = text;

            // Wrap content if content style exists
            if (contentStyle) {
                innerHTML = `<span style="${contentStyle}">${text}</span>`;
            }

            // Add prefix if exists (simulating :before)
            if (prefixStyle) {
                innerHTML = `<span style="${prefixStyle}"></span>${innerHTML}`;
            }

            // Add suffix if exists (simulating :after)
            if (suffixStyle) {
                innerHTML = `${innerHTML}<span style="${suffixStyle}"></span>`;
            }

            return `<h${level} style="${style}">${innerHTML}</h${level}>\n`;
        };

        // Paragraph
        renderer.paragraph = function (text) {
            return `<p style="${styles.p}">${text}</p>\n`;
        };

        // Blockquote
        renderer.blockquote = function (quote) {
            let processedQuote = quote;
            if (styles.blockquote_p && styles.p) {
                processedQuote = processedQuote.split(`style="${styles.p}"`).join(`style="${styles.blockquote_p}"`);
            }
            return `<blockquote style="${styles.blockquote}">${processedQuote}</blockquote>\n`;
        };

        // Code block - Matching markdown.com.cn/editor styling exactly
        renderer.code = function (code, language) {
            let highlighted = code;

            if (typeof hljs !== 'undefined') {
                try {
                    if (language && hljs.getLanguage(language)) {
                        highlighted = hljs.highlight(code, { language }).value;
                    } else {
                        highlighted = hljs.highlightAuto(code).value;
                    }
                } catch (e) {
                    highlighted = self.escapeHtml(code);
                }
            } else {
                highlighted = self.escapeHtml(code);
            }

            // Mac-style header using SVG background (matching target site exactly)
            const macDotHeader = `<span style="display: block; background: url(https://markdown.com.cn/images/macdot.svg); height: 30px; width: 100%; background-size: 40px; background-repeat: no-repeat; background-color: #fafafa; margin-bottom: -7px; border-radius: 5px; background-position: 10px 10px;"></span>`;

            // Pre style matching target site
            const preStyle = 'margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;';

            // Code style matching target site
            const codeStyle = 'overflow-x: auto; padding: 16px; color: #383a42; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #fafafa; border-radius: 5px;';

            return `<pre class="custom" data-tool="markdown.com.cn编辑器" style="${preStyle}">${macDotHeader}<code class="hljs" style="${codeStyle}">${highlighted}</code></pre>\n`;
        };

        // Inline code
        renderer.codespan = function (code) {
            return `<code style="${styles.code}">${self.escapeHtml(code)}</code>`;
        };

        // Lists
        renderer.list = function (body, ordered) {
            const tag = ordered ? 'ol' : 'ul';
            const style = ordered ? styles.ol : styles.ul;
            return `<${tag} style="${style}">${body}</${tag}>\n`;
        };

        // List item with task list support
        renderer.listitem = function (text) {
            // Check for task list syntax
            const taskMatch = text.match(/^\s*\[([ xX])\]\s*/);
            if (taskMatch) {
                const isChecked = taskMatch[1].toLowerCase() === 'x';
                const content = text.replace(/^\s*\[([ xX])\]\s*/, '');
                const checkboxStyle = `display: inline-block; width: 16px; height: 16px; margin-right: 8px; vertical-align: middle; border: 2px solid ${isChecked ? '#07c160' : '#d9d9d9'}; border-radius: 3px; background: ${isChecked ? '#07c160' : '#fff'}; position: relative;`;
                const checkmarkStyle = isChecked ? `content: ''; position: absolute; left: 4px; top: 1px; width: 4px; height: 8px; border: solid white; border-width: 0 2px 2px 0; transform: rotate(45deg);` : '';

                // Use SVG for better compatibility
                const checkbox = isChecked
                    ? `<span style="${checkboxStyle}"><span style="position: absolute; left: 3px; top: 0px; color: white; font-size: 12px; line-height: 12px;">✓</span></span>`
                    : `<span style="${checkboxStyle}"></span>`;

                return `<li style="${styles.li}; list-style: none; margin-left: -20px;">${checkbox}<span style="vertical-align: middle;">${content}</span></li>\n`;
            }
            return `<li style="${styles.li}">${text}</li>\n`;
        };

        // Links - 微信公众号链接转脚注
        renderer.link = function (href, title, text) {
            // 如果是相对链接或锚点，直接返回文本
            if (href.startsWith('#') || href.startsWith('/') || href.startsWith('./')) {
                return `<span style="${styles.a}">${text}</span>`;
            }

            // 收集外链并添加脚注引用
            self.linkIndex++;
            self.links.push({ index: self.linkIndex, text: text, href: href, title: title || '' });

            // 返回文本 + 上标引用
            const supStyle = styles.footnote || 'font-size: 12px; color: #3b82f6; vertical-align: super;';
            return `<span style="${styles.a}">${text}</span><sup style="${supStyle}">[${self.linkIndex}]</sup>`;
        };

        // Image
        renderer.image = function (href, title, text) {
            const alt = text ? ` alt="${text}"` : '';
            const titleAttr = title ? ` title="${title}"` : '';
            const imgHtml = `<img src="${href}"${alt}${titleAttr} style="${styles.img}">`;
            if (text && styles.figcaption) {
                return `${imgHtml}\n<figcaption style="${styles.figcaption}">${text}</figcaption>\n`;
            }
            return `${imgHtml}\n`;
        };

        // Table
        let tableRowIndex = 0;
        renderer.table = function (header, body) {
            tableRowIndex = 0;
            return `<section style="overflow-x: auto;"><table data-tool="markdown.com.cn编辑器" style="${styles.table}">${header}${body}</table></section>\n`;
        };

        renderer.tablerow = function (content) {
            const isEven = tableRowIndex % 2 === 1;
            const bgColor = isEven ? 'background-color: #F8F8F8;' : 'background-color: white;';
            tableRowIndex++;
            return `<tr style="border: 0; border-top: 1px solid #ccc; ${bgColor}">${content}</tr>\n`;
        };

        renderer.tablecell = function (content, flags) {
            const tag = flags.header ? 'th' : 'td';
            const style = flags.header ? styles.th : styles.td;
            const align = flags.align ? ` text-align: ${flags.align};` : '';
            return `<${tag} style="${style}${align}">${content}</${tag}>\n`;
        };

        // Horizontal rule
        renderer.hr = function () {
            return `<hr style="${styles.hr}">\n`;
        };

        // Strong
        renderer.strong = function (text) {
            return `<strong style="${styles.strong}">${text}</strong>`;
        };

        // Emphasis
        renderer.em = function (text) {
            return `<em style="${styles.em}">${text}</em>`;
        };

        // Strikethrough
        renderer.del = function (text) {
            return `<del style="${styles.del}">${text}</del>`;
        };

        marked.setOptions({
            renderer: renderer,
            gfm: true,
            breaks: true,
            pedantic: false,
            smartLists: true,
            smartypants: false
            // Removed deprecated 'sanitize' option
        });
    }

    /**
     * Generate footnotes section for collected links
     */
    generateFootnotes(theme) {
        if (this.links.length === 0) {
            return '';
        }

        const styles = theme.styles;
        const footnoteStyle = styles.footnoteSection || 'margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 14px; color: #6b7280;';
        const linkStyle = 'color: #6b7280; word-break: break-all; font-size: 12px;';

        let footnoteHtml = `<section style="${footnoteStyle}">`;
        footnoteHtml += `<p style="font-weight: bold; margin-bottom: 10px; color: #374151;">参考链接</p>`;

        this.links.forEach(link => {
            footnoteHtml += `<p style="margin: 5px 0; line-height: 1.6;"><span style="color: #3b82f6;">[${link.index}]</span> ${link.text}: <span style="${linkStyle}">${link.href}</span></p>`;
        });

        footnoteHtml += `</section>`;
        return footnoteHtml;
    }

    /**
     * Convert Markdown to HTML with inline styles
     */
    convert(markdown, theme) {
        // Reset links for each conversion
        this.resetLinks();

        // Configure marked with the selected theme
        this.configureMarked(theme);

        // Convert markdown to HTML
        let html = marked.parse(markdown);

        // Generate footnotes for collected links
        const footnotes = this.generateFootnotes(theme);

        // Wrap in container with theme styles
        html = `<section style="${theme.styles.wrapper}">${html}${footnotes}</section>`;

        return html;
    }

    /**
     * Escape HTML special characters
     */
    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, char => map[char]);
    }
}

// Create global instance
const converter = new MarkdownConverter();
