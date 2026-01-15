/**
 * Theme definitions for Markdown to WeChat converter
 * Each theme provides inline CSS styles for all Markdown elements
 * Version 1.4.0
 */

const themes = {
  // 默认主题 - Default clean theme
  default: {
    name: '默认',
    styles: {
      wrapper: 'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-size: 16px; color: #333; line-height: 1.75; padding: 20px; background: #fff;',
      h1: 'font-size: 24px; font-weight: bold; color: #1a1a1a; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; margin: 30px 0 20px 0;',
      h2: 'font-size: 20px; font-weight: bold; color: #1a1a1a; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px; margin: 25px 0 15px 0;',
      h3: 'font-size: 18px; font-weight: bold; color: #1a1a1a; margin: 20px 0 10px 0;',
      h4: 'font-size: 16px; font-weight: bold; color: #1a1a1a; margin: 15px 0 10px 0;',
      h5: 'font-size: 15px; font-weight: bold; color: #1a1a1a; margin: 15px 0 10px 0;',
      h6: 'font-size: 14px; font-weight: bold; color: #666; margin: 15px 0 10px 0;',
      p: 'margin: 15px 0; text-align: justify;',
      blockquote: 'border-left: 4px solid #3b82f6; padding: 15px 20px; margin: 20px 0; background: #f8fafc; color: #475569;',
      code: 'font-family: "SF Mono", Consolas, "Liberation Mono", Menlo, monospace; background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 14px; color: #e11d48;',
      pre: 'margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;',
      preCode: 'overflow-x: auto; padding: 16px; color: #383a42; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #fafafa; border-radius: 5px;',
      ul: 'margin: 15px 0; padding-left: 25px;',
      ol: 'margin: 15px 0; padding-left: 25px;',
      li: 'margin: 8px 0;',
      a: 'color: #3b82f6; text-decoration: none;',
      img: 'max-width: 100%; display: block; border-radius: 8px; margin: 15px auto;',
      table: 'width: auto; max-width: 100%; display: table; border-collapse: collapse; margin: 20px auto;',
      th: 'background: #f1f5f9; padding: 12px; text-align: left; border: 1px solid #e2e8f0; font-weight: bold;',
      td: 'padding: 12px; border: 1px solid #e2e8f0;',
      hr: 'border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;',
      strong: 'font-weight: bold; color: #1a1a1a;',
      em: 'font-style: italic;',
      del: 'text-decoration: line-through; color: #9ca3af;',
      footnote: 'font-size: 12px; color: #6b7280; vertical-align: super;',
      footnoteSection: 'margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 14px; color: #6b7280;'
    }
  },

  // 暗夜主题 - Dark mode theme
  dark: {
    name: '暗夜',
    styles: {
      wrapper: 'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-size: 16px; color: #e2e8f0; line-height: 1.75; padding: 20px; background: #0f172a;',
      h1: 'font-size: 24px; font-weight: bold; color: #f8fafc; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px; margin: 30px 0 20px 0;',
      h2: 'font-size: 20px; font-weight: bold; color: #f8fafc; border-bottom: 1px solid #334155; padding-bottom: 8px; margin: 25px 0 15px 0;',
      h3: 'font-size: 18px; font-weight: bold; color: #f8fafc; margin: 20px 0 10px 0;',
      h4: 'font-size: 16px; font-weight: bold; color: #f8fafc; margin: 15px 0 10px 0;',
      h5: 'font-size: 15px; font-weight: bold; color: #f8fafc; margin: 15px 0 10px 0;',
      h6: 'font-size: 14px; font-weight: bold; color: #94a3b8; margin: 15px 0 10px 0;',
      p: 'margin: 15px 0; text-align: justify;',
      blockquote: 'border-left: 4px solid #8b5cf6; padding: 15px 20px; margin: 20px 0; background: #1e293b; color: #cbd5e1;',
      code: 'font-family: "SF Mono", Consolas, "Liberation Mono", Menlo, monospace; background: #334155; padding: 2px 6px; border-radius: 4px; font-size: 14px; color: #f472b6;',
      pre: 'margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;',
      preCode: 'overflow-x: auto; padding: 16px; color: #383a42; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #fafafa; border-radius: 5px;',
      ul: 'margin: 15px 0; padding-left: 25px;',
      ol: 'margin: 15px 0; padding-left: 25px;',
      li: 'margin: 8px 0;',
      a: 'color: #a78bfa; text-decoration: none;',
      img: 'max-width: 100%; display: block; border-radius: 8px; margin: 15px auto;',
      table: 'width: auto; max-width: 100%; display: table; border-collapse: collapse; margin: 20px auto;',
      th: 'background: #1e293b; padding: 12px; text-align: left; border: 1px solid #334155; font-weight: bold; color: #f8fafc;',
      td: 'padding: 12px; border: 1px solid #334155;',
      hr: 'border: none; border-top: 1px solid #334155; margin: 30px 0;',
      strong: 'font-weight: bold; color: #f8fafc;',
      em: 'font-style: italic;',
      del: 'text-decoration: line-through; color: #64748b;',
      footnote: 'font-size: 12px; color: #94a3b8; vertical-align: super;',
      footnoteSection: 'margin-top: 40px; padding-top: 20px; border-top: 1px solid #334155; font-size: 14px; color: #94a3b8;'
    }
  },

  // 技术主题 - GitHub-inspired developer theme
  tech: {
    name: '技术',
    styles: {
      wrapper: 'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-size: 16px; color: #24292f; line-height: 1.6; padding: 20px; background: #fff;',
      h1: 'font-size: 26px; font-weight: 600; color: #24292f; border-bottom: 1px solid #d0d7de; padding-bottom: 8px; margin: 24px 0 16px 0;',
      h2: 'font-size: 22px; font-weight: 600; color: #24292f; border-bottom: 1px solid #d0d7de; padding-bottom: 6px; margin: 24px 0 16px 0;',
      h3: 'font-size: 18px; font-weight: 600; color: #24292f; margin: 24px 0 16px 0;',
      h4: 'font-size: 16px; font-weight: 600; color: #24292f; margin: 24px 0 16px 0;',
      h5: 'font-size: 14px; font-weight: 600; color: #24292f; margin: 24px 0 16px 0;',
      h6: 'font-size: 14px; font-weight: 600; color: #57606a; margin: 24px 0 16px 0;',
      p: 'margin: 16px 0;',
      blockquote: 'border-left: 4px solid #d0d7de; padding: 0 16px; margin: 16px 0; color: #57606a;',
      code: 'font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace; background: rgba(175,184,193,0.2); padding: 3px 6px; border-radius: 6px; font-size: 85%; color: #24292f;',
      pre: 'margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;',
      preCode: 'overflow-x: auto; padding: 16px; color: #383a42; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #fafafa; border-radius: 5px;',
      ul: 'margin: 16px 0; padding-left: 2em;',
      ol: 'margin: 16px 0; padding-left: 2em;',
      li: 'margin: 4px 0;',
      a: 'color: #0969da; text-decoration: none;',
      img: 'max-width: 100%; display: block; margin: 16px auto;',
      table: 'width: auto; max-width: 100%; display: table; border-collapse: collapse; margin: 16px auto;',
      th: 'background: #f6f8fa; padding: 6px 13px; text-align: left; border: 1px solid #d0d7de; font-weight: 600;',
      td: 'padding: 6px 13px; border: 1px solid #d0d7de;',
      hr: 'border: none; border-top: 1px solid #d0d7de; margin: 24px 0;',
      strong: 'font-weight: 600;',
      em: 'font-style: italic;',
      del: 'text-decoration: line-through;',
      footnote: 'font-size: 12px; color: #57606a; vertical-align: super;',
      footnoteSection: 'margin-top: 32px; padding-top: 16px; border-top: 1px solid #d0d7de; font-size: 14px; color: #57606a;'
    }
  },

  // 优雅主题 - Elegant serif theme
  elegant: {
    name: '优雅',
    styles: {
      wrapper: 'font-family: "Noto Serif SC", Georgia, "Times New Roman", serif; font-size: 17px; color: #2c2c2c; line-height: 1.9; padding: 25px; background: #fdfcfb;',
      h1: 'font-size: 28px; font-weight: normal; color: #1a1a1a; text-align: center; margin: 40px 0 30px 0; letter-spacing: 2px;',
      h2: 'font-size: 22px; font-weight: normal; color: #1a1a1a; border-bottom: 1px solid #c9a668; padding-bottom: 10px; margin: 35px 0 20px 0;',
      h3: 'font-size: 19px; font-weight: normal; color: #1a1a1a; margin: 30px 0 15px 0;',
      h4: 'font-size: 17px; font-weight: bold; color: #1a1a1a; margin: 25px 0 12px 0;',
      h5: 'font-size: 16px; font-weight: bold; color: #1a1a1a; margin: 20px 0 10px 0;',
      h6: 'font-size: 15px; font-weight: bold; color: #666; margin: 20px 0 10px 0;',
      p: 'margin: 18px 0; text-align: justify; text-indent: 2em;',
      blockquote: 'border-left: 3px solid #c9a668; padding: 20px 25px; margin: 25px 0; background: #faf8f5; color: #5c5c5c; font-style: italic;',
      code: 'font-family: "SF Mono", Consolas, monospace; background: #f5f2ed; padding: 2px 6px; border-radius: 3px; font-size: 15px; color: #b45309;',
      pre: 'margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;',
      preCode: 'overflow-x: auto; padding: 16px; color: #383a42; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #fafafa; border-radius: 5px;',
      ul: 'margin: 18px 0; padding-left: 30px;',
      ol: 'margin: 18px 0; padding-left: 30px;',
      li: 'margin: 10px 0;',
      a: 'color: #b45309; text-decoration: none; border-bottom: 1px solid #c9a668;',
      img: 'max-width: 100%; display: block; border-radius: 4px; margin: 20px auto; box-shadow: 0 4px 12px rgba(0,0,0,0.1);',
      table: 'width: auto; max-width: 100%; display: table; border-collapse: collapse; margin: 25px auto;',
      th: 'background: #f5f2ed; padding: 14px; text-align: left; border: 1px solid #e0dcd4;',
      td: 'padding: 14px; border: 1px solid #e0dcd4;',
      hr: 'border: none; border-top: 1px solid #e0dcd4; margin: 40px 0;',
      strong: 'font-weight: bold; color: #1a1a1a;',
      em: 'font-style: italic;',
      del: 'text-decoration: line-through; color: #999;',
      footnote: 'font-size: 13px; color: #888; vertical-align: super;',
      footnoteSection: 'margin-top: 50px; padding-top: 25px; border-top: 1px solid #e0dcd4; font-size: 14px; color: #666;'
    }
  },

  // 彩虹主题 - Colorful creative theme
  rainbow: {
    name: '彩虹',
    styles: {
      wrapper: 'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-size: 16px; color: #374151; line-height: 1.75; padding: 20px; background: linear-gradient(135deg, #fdf4ff 0%, #faf5ff 50%, #f5f3ff 100%);',
      h1: 'font-size: 26px; font-weight: bold; background: linear-gradient(90deg, #ec4899, #8b5cf6, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin: 30px 0 20px 0;',
      h2: 'font-size: 22px; font-weight: bold; color: #7c3aed; border-bottom: 2px solid #c4b5fd; padding-bottom: 8px; margin: 25px 0 15px 0;',
      h3: 'font-size: 18px; font-weight: bold; color: #9333ea; margin: 20px 0 10px 0;',
      h4: 'font-size: 16px; font-weight: bold; color: #a855f7; margin: 15px 0 10px 0;',
      h5: 'font-size: 15px; font-weight: bold; color: #c084fc; margin: 15px 0 10px 0;',
      h6: 'font-size: 14px; font-weight: bold; color: #d8b4fe; margin: 15px 0 10px 0;',
      p: 'margin: 15px 0; text-align: justify;',
      blockquote: 'border-left: 4px solid #c084fc; padding: 15px 20px; margin: 20px 0; background: rgba(192, 132, 252, 0.1); color: #6b21a8; border-radius: 0 8px 8px 0;',
      code: 'font-family: "SF Mono", Consolas, monospace; background: linear-gradient(90deg, #fce7f3, #ede9fe); padding: 2px 8px; border-radius: 4px; font-size: 14px; color: #be185d;',
      pre: 'margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;',
      preCode: 'overflow-x: auto; padding: 16px; color: #383a42; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #fafafa; border-radius: 5px;',
      ul: 'margin: 15px 0; padding-left: 25px;',
      ol: 'margin: 15px 0; padding-left: 25px;',
      li: 'margin: 8px 0;',
      a: 'color: #7c3aed; text-decoration: none; font-weight: 500;',
      img: 'max-width: 100%; display: block; border-radius: 12px; margin: 15px auto; box-shadow: 0 4px 20px rgba(139, 92, 246, 0.2);',
      table: 'width: auto; max-width: 100%; display: table; border-collapse: collapse; margin: 20px auto; border-radius: 8px; overflow: hidden;',
      th: 'background: linear-gradient(90deg, #c4b5fd, #a5b4fc); padding: 12px; text-align: left; border: none; font-weight: bold; color: #4c1d95;',
      td: 'padding: 12px; border-bottom: 1px solid #e9d5ff; background: rgba(255,255,255,0.5);',
      hr: 'border: none; height: 2px; background: linear-gradient(90deg, #ec4899, #8b5cf6, #3b82f6); margin: 30px 0; border-radius: 1px;',
      strong: 'font-weight: bold; color: #6d28d9;',
      em: 'font-style: italic; color: #7c3aed;',
      del: 'text-decoration: line-through; color: #a78bfa;',
      footnote: 'font-size: 12px; color: #8b5cf6; vertical-align: super;',
      footnoteSection: 'margin-top: 40px; padding-top: 20px; border-top: 2px solid #e9d5ff; font-size: 14px; color: #7c3aed;'
    }
  },

  // 极客主题 - Terminal/Hacker style with dark fonts
  geek: {
    name: '极客',
    styles: {
      wrapper: 'font-family: "JetBrains Mono", "Fira Code", "SF Mono", Consolas, monospace; font-size: 15px; color: #1a1a1a; line-height: 1.7; padding: 20px; background: #f0f4f0;',
      h1: 'font-size: 24px; font-weight: bold; color: #0d0d0d; border-left: 4px solid #22c55e; padding-left: 15px; margin: 30px 0 20px 0;',
      h2: 'font-size: 20px; font-weight: bold; color: #0d0d0d; border-left: 3px solid #16a34a; padding-left: 12px; margin: 25px 0 15px 0;',
      h3: 'font-size: 17px; font-weight: bold; color: #1a1a1a; margin: 20px 0 10px 0;',
      h4: 'font-size: 15px; font-weight: bold; color: #1a1a1a; margin: 15px 0 10px 0;',
      h5: 'font-size: 14px; font-weight: bold; color: #333; margin: 15px 0 10px 0;',
      h6: 'font-size: 13px; font-weight: bold; color: #555; margin: 15px 0 10px 0;',
      p: 'margin: 14px 0;',
      blockquote: 'border-left: 3px solid #22c55e; padding: 12px 18px; margin: 18px 0; background: #e8f5e9; color: #1a1a1a;',
      code: 'font-family: "JetBrains Mono", "Fira Code", Consolas, monospace; background: #d4edda; padding: 2px 6px; border-radius: 3px; font-size: 14px; color: #155724;',
      pre: 'margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;',
      preCode: 'overflow-x: auto; padding: 16px; color: #383a42; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #fafafa; border-radius: 5px;',
      ul: 'margin: 14px 0; padding-left: 25px; list-style-type: square;',
      ol: 'margin: 14px 0; padding-left: 25px;',
      li: 'margin: 6px 0;',
      a: 'color: #15803d; text-decoration: none; border-bottom: 1px dashed #22c55e;',
      img: 'max-width: 100%; display: block; border-radius: 4px; margin: 15px auto; border: 1px solid #d1d5db;',
      table: 'width: auto; max-width: 100%; display: table; border-collapse: collapse; margin: 18px auto; font-size: 14px;',
      th: 'background: #d4edda; padding: 10px; text-align: left; border: 1px solid #a3cfbb; font-weight: bold; color: #0d0d0d;',
      td: 'padding: 10px; border: 1px solid #d1d5db;',
      hr: 'border: none; border-top: 2px dashed #22c55e; margin: 25px 0;',
      strong: 'font-weight: bold; color: #0d0d0d;',
      em: 'font-style: italic;',
      del: 'text-decoration: line-through; color: #6b7280;',
      footnote: 'font-size: 11px; color: #15803d; vertical-align: super;',
      footnoteSection: 'margin-top: 35px; padding-top: 18px; border-top: 2px dashed #22c55e; font-size: 13px; color: #555;'
    }
  },

  // 极简主题 - Clean minimalist with dark fonts
  minimal: {
    name: '极简',
    styles: {
      wrapper: 'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; font-size: 16px; color: #1f1f1f; line-height: 1.8; padding: 25px; background: #fff;',
      h1: 'font-size: 28px; font-weight: 300; color: #0a0a0a; margin: 35px 0 25px 0; letter-spacing: -0.5px;',
      h2: 'font-size: 22px; font-weight: 400; color: #0a0a0a; margin: 30px 0 18px 0;',
      h3: 'font-size: 18px; font-weight: 500; color: #1a1a1a; margin: 25px 0 12px 0;',
      h4: 'font-size: 16px; font-weight: 600; color: #1a1a1a; margin: 20px 0 10px 0;',
      h5: 'font-size: 15px; font-weight: 600; color: #333; margin: 18px 0 8px 0;',
      h6: 'font-size: 14px; font-weight: 600; color: #555; margin: 15px 0 8px 0;',
      p: 'margin: 16px 0;',
      blockquote: 'border-left: 2px solid #0a0a0a; padding: 5px 20px; margin: 20px 0; color: #4a4a4a; font-style: italic;',
      code: 'font-family: "SF Mono", Monaco, Consolas, monospace; background: #f5f5f5; padding: 2px 5px; border-radius: 2px; font-size: 14px; color: #1a1a1a;',
      pre: 'margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;',
      preCode: 'overflow-x: auto; padding: 16px; color: #383a42; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #fafafa; border-radius: 5px;',
      ul: 'margin: 16px 0; padding-left: 22px;',
      ol: 'margin: 16px 0; padding-left: 22px;',
      li: 'margin: 8px 0;',
      a: 'color: #0a0a0a; text-decoration: underline;',
      img: 'max-width: 100%; display: block; margin: 20px auto;',
      table: 'width: auto; max-width: 100%; display: table; border-collapse: collapse; margin: 20px auto;',
      th: 'background: #fafafa; padding: 12px; text-align: left; border-bottom: 2px solid #0a0a0a; font-weight: 600; color: #0a0a0a;',
      td: 'padding: 12px; border-bottom: 1px solid #eaeaea;',
      hr: 'border: none; border-top: 1px solid #e0e0e0; margin: 35px 0;',
      strong: 'font-weight: 600; color: #0a0a0a;',
      em: 'font-style: italic;',
      del: 'text-decoration: line-through; color: #999;',
      footnote: 'font-size: 12px; color: #666; vertical-align: super;',
      footnoteSection: 'margin-top: 45px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 13px; color: #666;'
    }
  },

  // 墨色主题 - Ink/Paper style with dark fonts
  ink: {
    name: '墨色',
    styles: {
      wrapper: 'font-family: "Source Han Serif SC", "Noto Serif SC", "Songti SC", Georgia, serif; font-size: 17px; color: #1a1a1a; line-height: 1.9; padding: 25px; background: #fffef8;',
      h1: 'font-size: 26px; font-weight: bold; color: #000; text-align: center; margin: 35px 0 25px 0; letter-spacing: 3px;',
      h2: 'font-size: 21px; font-weight: bold; color: #0a0a0a; border-bottom: 2px solid #1a1a1a; padding-bottom: 8px; margin: 30px 0 18px 0;',
      h3: 'font-size: 18px; font-weight: bold; color: #1a1a1a; margin: 25px 0 12px 0;',
      h4: 'font-size: 16px; font-weight: bold; color: #1a1a1a; margin: 20px 0 10px 0;',
      h5: 'font-size: 15px; font-weight: bold; color: #333; margin: 18px 0 8px 0;',
      h6: 'font-size: 14px; font-weight: bold; color: #555; margin: 15px 0 8px 0;',
      p: 'margin: 18px 0; text-align: justify; text-indent: 2em;',
      blockquote: 'border-left: 3px solid #333; padding: 15px 22px; margin: 22px 0; background: #f9f8f2; color: #333; font-style: italic;',
      code: 'font-family: "SF Mono", Consolas, monospace; background: #f0efe8; padding: 2px 6px; border-radius: 2px; font-size: 15px; color: #1a1a1a;',
      pre: 'margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;',
      preCode: 'overflow-x: auto; padding: 16px; color: #383a42; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #fafafa; border-radius: 5px;',
      ul: 'margin: 18px 0; padding-left: 28px;',
      ol: 'margin: 18px 0; padding-left: 28px;',
      li: 'margin: 10px 0;',
      a: 'color: #1a1a1a; text-decoration: none; border-bottom: 1px solid #333;',
      img: 'max-width: 100%; display: block; margin: 20px auto; border: 1px solid #ddd;',
      table: 'width: auto; max-width: 100%; display: table; border-collapse: collapse; margin: 22px auto;',
      th: 'background: #f5f4ee; padding: 12px; text-align: left; border: 1px solid #ccc; font-weight: bold; color: #0a0a0a;',
      td: 'padding: 12px; border: 1px solid #ddd;',
      hr: 'border: none; border-top: 1px solid #333; margin: 35px auto; width: 60%;',
      strong: 'font-weight: bold; color: #000;',
      em: 'font-style: italic;',
      del: 'text-decoration: line-through; color: #888;',
      footnote: 'font-size: 12px; color: #666; vertical-align: super;',
      footnoteSection: 'margin-top: 45px; padding-top: 22px; border-top: 1px solid #333; font-size: 14px; color: #555;'
    }
  },

  // 科技蓝主题 - Tech blue with dark fonts
  techBlue: {
    name: '科技蓝',
    styles: {
      wrapper: 'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-size: 16px; color: #1e293b; line-height: 1.75; padding: 20px; background: #f8fafc;',
      h1: 'font-size: 26px; font-weight: 700; color: #0f172a; border-left: 5px solid #0ea5e9; padding-left: 15px; margin: 30px 0 20px 0;',
      h2: 'font-size: 22px; font-weight: 600; color: #0f172a; border-bottom: 2px solid #0ea5e9; padding-bottom: 8px; margin: 25px 0 15px 0;',
      h3: 'font-size: 18px; font-weight: 600; color: #1e293b; margin: 20px 0 10px 0;',
      h4: 'font-size: 16px; font-weight: 600; color: #1e293b; margin: 15px 0 10px 0;',
      h5: 'font-size: 15px; font-weight: 600; color: #334155; margin: 15px 0 10px 0;',
      h6: 'font-size: 14px; font-weight: 600; color: #475569; margin: 15px 0 10px 0;',
      p: 'margin: 15px 0;',
      blockquote: 'border-left: 4px solid #0ea5e9; padding: 15px 20px; margin: 20px 0; background: #e0f2fe; color: #0c4a6e;',
      code: 'font-family: "SF Mono", Consolas, monospace; background: #e0f2fe; padding: 2px 6px; border-radius: 4px; font-size: 14px; color: #0369a1;',
      pre: 'margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;',
      preCode: 'overflow-x: auto; padding: 16px; color: #383a42; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #fafafa; border-radius: 5px;',
      ul: 'margin: 15px 0; padding-left: 25px;',
      ol: 'margin: 15px 0; padding-left: 25px;',
      li: 'margin: 8px 0;',
      a: 'color: #0284c7; text-decoration: none; font-weight: 500;',
      img: 'max-width: 100%; display: block; border-radius: 8px; margin: 15px auto; box-shadow: 0 4px 12px rgba(14, 165, 233, 0.15);',
      table: 'width: auto; max-width: 100%; display: table; border-collapse: collapse; margin: 20px auto;',
      th: 'background: #0ea5e9; padding: 12px; text-align: left; border: none; font-weight: 600; color: #fff;',
      td: 'padding: 12px; border-bottom: 1px solid #e2e8f0; background: #fff;',
      hr: 'border: none; height: 2px; background: linear-gradient(90deg, #0ea5e9, #38bdf8); margin: 30px 0;',
      strong: 'font-weight: 600; color: #0f172a;',
      em: 'font-style: italic;',
      del: 'text-decoration: line-through; color: #94a3b8;',
      footnote: 'font-size: 12px; color: #0284c7; vertical-align: super;',
      footnoteSection: 'margin-top: 40px; padding-top: 20px; border-top: 2px solid #0ea5e9; font-size: 14px; color: #475569;'
    }
  },
  // Mac 风格 - Mac Style
  mac: {
    name: 'Mac 风格',
    macCodeBlock: true,
    styles: {
      wrapper: 'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-size: 16px; color: #333; line-height: 1.75; padding: 20px; background: #fff;',
      h1: 'font-size: 26px; font-weight: bold; color: #333; margin: 30px 0 20px 0; text-align: center;',
      h2: 'font-size: 22px; font-weight: bold; color: #333; border-bottom: 1px solid #eaeaea; padding-bottom: 10px; margin: 30px 0 20px 0;',
      h3: 'font-size: 18px; font-weight: bold; color: #333; margin: 25px 0 15px 0;',
      h4: 'font-size: 16px; font-weight: bold; color: #333; margin: 20px 0 10px 0;',
      p: 'margin: 16px 0; text-align: justify; line-height: 1.8;',
      blockquote: 'border-left: 4px solid #42b983; padding: 15px 20px; margin: 20px 0; background: #f8f8f8; color: #555; border-radius: 4px;',
      code: 'font-family: "SF Mono", Monaco, Consolas, monospace; background: #f5f5f5; padding: 3px 6px; border-radius: 3px; font-size: 14px; color: #e96900;',
      pre: 'margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;',
      preCode: 'overflow-x: auto; padding: 16px; color: #383a42; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #fafafa; border-radius: 5px;',
      macHeader: 'display: flex; gap: 8px; padding-bottom: 12px; margin-bottom: 0px;',
      ul: 'margin: 16px 0; padding-left: 25px;',
      ol: 'margin: 16px 0; padding-left: 25px;',
      li: 'margin: 8px 0;',
      a: 'color: #42b983; text-decoration: none; border-bottom: 1px solid #42b983;',
      img: 'max-width: 100%; display: block; border-radius: 6px; margin: 20px auto; box-shadow: 0 4px 12px rgba(0,0,0,0.1);',
      table: 'width: auto; max-width: 100%; display: table; border-collapse: collapse; margin: 20px auto; font-size: 14px;',
      th: 'background: #f8f8f8; padding: 12px 15px; text-align: left; border: 1px solid #eee; font-weight: bold; color: #333;',
      td: 'padding: 12px 15px; border: 1px solid #eee;',
      hr: 'border: none; height: 1px; background: #eaeaea; margin: 40px 0;',
      strong: 'font-weight: bold; color: #333;',
      footnote: 'font-size: 12px; color: #42b983; vertical-align: super;'
    }
  },
  // 山水主题 - Mountain theme (Custom)
  mountain: {
    name: '山水',
    styles: {
      wrapper: 'line-height: 1.6; letter-spacing: .034em; color: rgb(63, 63, 63); font-size: 16px; word-break:all; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; padding: 20px; background: #fff;',

      // H1 (Center with bg)
      h1: 'text-align:center; background-image: url(https://my-wechat.mdnice.com/mdnice/mountain_2_20191028221337.png); background-position: center top; background-repeat: no-repeat; background-size: 95px; line-height:95px; margin-top: 38px; margin-bottom: 10px; font-weight: normal;',
      h1_content: 'font-size: 20px; color: rgb(60, 112, 198); border-bottom:2px solid #3C7076;',

      // H2 (Center with bg)
      h2: 'display:block; text-align:center; background-image: url(https://my-wechat.mdnice.com/mdnice/mountain_2_20191028221337.png); background-position: center center; background-repeat: no-repeat; background-size: 63px; margin-top: 38px; margin-bottom: 10px; font-weight: normal;',
      h2_content: 'text-align:center; display: inline-block; height: 38px; line-height: 42px; color: rgb(60, 112, 198); font-size:18px;',

      // H3 (Prefix with image)
      h3: 'margin: 20px 0 10px 0; line-height: 1.5;',
      h3_prefix: 'background-image:url(https://my-wechat.mdnice.com/mdnice/mountain_1_20191028221337.png); background-size:15px 15px; display: inline-block; width: 15px; height: 15px; vertical-align: middle; margin-right: 8px;',
      h3_content: 'font-size:16px; font-weight:bold; display:inline-block; color:rgb(60,112,198); vertical-align: middle;',

      h4: 'font-size: 16px; font-weight: bold; color: rgb(60, 112, 198); margin: 15px 0 10px 0;',
      h5: 'font-size: 15px; font-weight: bold; color: rgb(60, 112, 198); margin: 15px 0 10px 0;',
      h6: 'font-size: 14px; font-weight: bold; color: rgb(60, 112, 198); margin: 15px 0 10px 0;',

      p: 'padding-top: 23px; color: rgb(74,74,74); line-height: 1.75em; margin: 0;',

      blockquote: 'padding: 15px 20px; line-height: 27px; background-color: rgb(239, 239, 239); border-left:none; display:block; margin: 20px 0; border-radius: 4px;',
      blockquote_p: 'padding: 0px; font-size:15px; color:rgb(89,89,89); margin: 0; line-height: 1.75em;',

      code: 'font-family: inherit; background: transparent; color: rgb(60, 112, 198); padding: 0 4px; font-size: inherit;',

      pre: 'margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;',
      preCode: 'overflow-x: auto; padding: 16px; color: #383a42; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #fafafa; border-radius: 5px;',

      ul: 'margin: 15px 0; padding-left: 25px; list-style-type: disc; color: rgb(63, 63, 63);',
      ol: 'margin: 15px 0; padding-left: 25px; list-style-type: decimal; color: rgb(63, 63, 63);',
      li: 'margin: 8px 0; line-height: 1.75em;',

      a: 'color: rgb(60, 112, 198); text-decoration:none; border-bottom: 1px solid rgb(60, 112, 198);',

      img: 'max-width: 100%; display: block; border-radius: 4px; margin: 20px auto;',
      figcaption: 'display:block; font-size:12px; font-family:PingFangSC-Light; text-align: center; color: #999; margin-top: -15px; margin-bottom: 20px;',

      table: 'width: auto; max-width: 100%; display: table; border-collapse: collapse; margin: 20px auto; border: 1px solid #ccc;',
      th: 'padding: 5px 10px; font-size: 14px; border: 1px solid #ccc; background: #f9f9f9; font-weight: bold;',
      td: 'padding: 5px 10px; font-size: 14px; border: 1px solid #ccc;',

      hr: 'height:1px; padding:0; border:none; text-align:center; background-image:linear-gradient(to right,rgba(60,122,198,0),rgba(60,122,198,0.75),rgba(60,122,198,0)); margin: 30px 0;',

      strong: 'line-height: 1.75em; color: rgb(74,74,74); font-weight: bold;',
      em: 'font-style: italic;',
      del: 'text-decoration: line-through;',

      footnote: 'font-size: 12px; color: rgb(60, 112, 198); vertical-align: super;',
      footnoteSection: 'margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; font-size: 14px;'
    }
  },
  // 飞书主题 - Lark
  lark: {
    name: '飞书',
    styles: {
      wrapper: 'font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-size: 16px; color: #1f2329; line-height: 1.6; padding: 20px; background: #fff;',
      h1: 'font-size: 26px; font-weight: 600; color: #1f2329; margin: 24px 0 12px 0;',
      h2: 'font-size: 22px; font-weight: 600; color: #1f2329; margin: 24px 0 12px 0;',
      h3: 'font-size: 18px; font-weight: 600; color: #1f2329; margin: 16px 0 8px 0;',
      h4: 'font-size: 16px; font-weight: 600; color: #1f2329; margin: 16px 0 8px 0;',
      h5: 'font-size: 15px; font-weight: 600; color: #1f2329; margin: 16px 0 8px 0;',
      p: 'margin: 12px 0; word-break: break-word;',
      blockquote: 'border-left: 3px solid #dfe1e5; padding-left: 12px; margin: 12px 0; color: #646a73;',
      code: 'font-family: "SF Mono", Consolas, monospace; background: #f5f6f7; padding: 2px 5px; border-radius: 4px; font-size: 14px; color: #1f2329; border: 1px solid #dee0e3;',
      pre: 'margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;',
      preCode: 'overflow-x: auto; padding: 16px; color: #383a42; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #fafafa; border-radius: 5px;',
      ul: 'margin: 8px 0; padding-left: 24px;',
      ol: 'margin: 8px 0; padding-left: 24px;',
      li: 'margin: 4px 0;',
      a: 'color: #3370ff; text-decoration: none; cursor: pointer;',
      img: 'max-width: 100%; border-radius: 4px; margin: 12px auto; display: block;',
      table: 'width: 100%; border-collapse: collapse; margin: 16px 0; width: auto; max-width: 100%; display: table;',
      th: 'background: #f5f6f7; padding: 8px 12px; text-align: left; border: 1px solid #dee0e3; font-weight: 600; color: #1f2329;',
      td: 'padding: 8px 12px; border: 1px solid #dee0e3;',
      hr: 'border: none; border-top: 1px solid #dee0e3; margin: 24px 0;',
      strong: 'font-weight: 600; color: #1f2329;'
    }
  },
  // Notion 风格
  notion: {
    name: 'Notion',
    styles: {
      wrapper: 'font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; font-size: 16px; color: #37352f; line-height: 1.5; padding: 20px; background: #fff;',
      h1: 'font-size: 30px; font-weight: 700; color: #37352f; margin: 32px 0 4px 0;',
      h2: 'font-size: 24px; font-weight: 600; color: #37352f; margin: 24px 0 4px 0; border-bottom: 1px solid #e9e9e8; padding-bottom: 6px;',
      h3: 'font-size: 20px; font-weight: 600; color: #37352f; margin: 16px 0 4px 0;',
      h4: 'font-size: 16px; font-weight: 600; color: #37352f; margin: 12px 0 4px 0;',
      p: 'margin: 6px 0; white-space: pre-wrap; word-break: break-word;',
      blockquote: 'border-left: 3px solid #37352f; padding-left: 14px; margin: 8px 0; color: #37352f; opacity: 0.8; font-size: 16px;',
      code: 'font-family: "SF Mono", "Segoe UI Mono", "Roboto Mono", monospace; background: rgba(135,131,120,0.15); padding: 2px 5px; border-radius: 3px; font-size: 85%; color: #eb5757;',
      pre: 'margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;',
      preCode: 'overflow-x: auto; padding: 16px; color: #383a42; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #fafafa; border-radius: 5px;',
      ul: 'margin: 4px 0; padding-left: 24px;',
      ol: 'margin: 4px 0; padding-left: 24px;',
      li: 'margin: 2px 0;',
      a: 'color: inherit; text-decoration: underline; text-decoration-color: rgba(55, 53, 47, 0.4); text-underline-offset: 2px;',
      img: 'max-width: 100%; border-radius: 2px; margin: 8px auto; display: block;',
      table: 'width: 100%; border-collapse: collapse; margin: 16px 0; width: auto; max-width: 100%; display: table;',
      th: 'background: #f7f6f3; padding: 8px; text-align: left; border: 1px solid #e9e9e8; font-weight: 600;',
      td: 'padding: 8px; border: 1px solid #e9e9e8;',
      hr: 'border: none; border-top: 1px solid #e9e9e8; margin: 24px 0;',
      strong: 'font-weight: 600;'
    }
  },
  // Medium 风格
  medium: {
    name: 'Medium',
    styles: {
      wrapper: 'font-family: "medium-content-serif-font", Georgia, Cambria, "Times New Roman", Times, serif; font-size: 18px; color: rgba(0,0,0,0.84); line-height: 1.58; padding: 20px; background: #fff;',
      h1: 'font-family: "medium-content-sans-serif-font", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif; font-size: 32px; font-weight: 700; color: rgba(0,0,0,0.84); margin: 36px 0 12px 0;',
      h2: 'font-family: "medium-content-sans-serif-font", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif; font-size: 26px; font-weight: 700; color: rgba(0,0,0,0.84); margin: 28px 0 8px 0;',
      h3: 'font-family: "medium-content-sans-serif-font", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif; font-size: 22px; font-weight: 700; color: rgba(0,0,0,0.84); margin: 22px 0 6px 0;',
      p: 'margin: 20px 0; word-break: break-word;',
      blockquote: 'border-left: 3px solid rgba(0,0,0,0.84); padding-left: 20px; margin: 20px 0; font-style: italic; color: rgba(0,0,0,0.6);',
      code: 'font-family: Menlo, Monaco, "Courier New", Courier, monospace; background: rgba(0,0,0,0.05); padding: 2px 4px; font-size: 16px;',
      pre: 'margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;',
      preCode: 'overflow-x: auto; padding: 16px; color: #383a42; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #fafafa; border-radius: 5px;',
      ul: 'margin: 20px 0; padding-left: 30px;',
      ol: 'margin: 20px 0; padding-left: 30px;',
      li: 'margin: 8px 0;',
      a: 'color: inherit; text-decoration: underline;',
      img: 'max-width: 100%; margin: 30px auto; display: block;',
      table: 'width: 100%; border-collapse: collapse; margin: 30px 0; width: auto; max-width: 100%; display: table;',
      th: 'border-bottom: 2px solid rgba(0,0,0,0.1); padding: 10px; text-align: left; font-weight: 700;',
      td: 'border-bottom: 1px solid rgba(0,0,0,0.1); padding: 10px;',
      hr: 'border: none; text-align: center; margin: 40px 0; display: flex; justify-content: center; content: "...";',
      strong: 'font-weight: 700;'
    }
  },
  // 阿里云风格 - Aliyun
  aliyun: {
    name: '阿里云',
    styles: {
      wrapper: 'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-size: 16px; color: #333; line-height: 1.8; padding: 20px; background: #fff;',
      h1: 'font-size: 28px; font-weight: 600; color: #333; margin: 30px 0 16px 0; border-left: 4px solid #ff6a00; padding-left: 12px;',
      h2: 'font-size: 24px; font-weight: 500; color: #333; margin: 26px 0 14px 0;',
      h3: 'font-size: 20px; font-weight: 500; color: #333; margin: 22px 0 12px 0;',
      p: 'margin: 16px 0; text-align: justify;',
      blockquote: 'border-left: 4px solid #ff6a00; padding: 12px 20px; margin: 20px 0; background: #fff7f0; color: #666;',
      code: 'font-family: "SF Mono", Consolas, monospace; background: #f7f7f7; padding: 2px 6px; border-radius: 3px; font-size: 14px; color: #ff6a00;',
      pre: 'margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;',
      preCode: 'overflow-x: auto; padding: 16px; color: #383a42; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #fafafa; border-radius: 5px;',
      ul: 'margin: 16px 0; padding-left: 24px;',
      ol: 'margin: 16px 0; padding-left: 24px;',
      li: 'margin: 6px 0;',
      a: 'color: #ff6a00; text-decoration: none;',
      img: 'max-width: 100%; border-radius: 4px; margin: 20px auto; display: block;',
      table: 'width: 100%; border-collapse: collapse; margin: 20px 0; width: auto; max-width: 100%; display: table;',
      th: 'background: #fafafa; padding: 12px; text-align: left; border: 1px solid #eee; font-weight: 600;',
      td: 'padding: 12px; border: 1px solid #eee;',
      hr: 'border: none; border-top: 1px solid #eee; margin: 30px 0;',
      strong: 'font-weight: 600; color: #333;'
    }
  },
  // Vue 风格
  vue: {
    name: 'Vue',
    styles: {
      wrapper: 'font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif; font-size: 16px; color: #2c3e50; line-height: 1.6; padding: 20px; background: #fff;',
      h1: 'font-size: 28px; font-weight: 600; color: #2c3e50; margin: 30px 0 16px 0;',
      h2: 'font-size: 24px; font-weight: 600; color: #2c3e50; margin: 26px 0 14px 0; border-bottom: 1px solid #eaecef; padding-bottom: 8px;',
      h3: 'font-size: 20px; font-weight: 600; color: #2c3e50; margin: 22px 0 12px 0;',
      h4: 'font-size: 16px; font-weight: 600; color: #2c3e50; margin: 18px 0 10px 0;',
      p: 'margin: 16px 0;',
      blockquote: 'border-left: 4px solid #42b983; padding: 12px 20px; margin: 20px 0; background: #f8f8f8; color: #6a8bad;',
      code: 'font-family: "Source Code Pro", Monaco, monospace; background: #f8f8f8; padding: 2px 6px; border-radius: 3px; font-size: 14px; color: #e96900;',
      pre: 'margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;',
      preCode: 'overflow-x: auto; padding: 16px; color: #383a42; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #fafafa; border-radius: 5px;',
      ul: 'margin: 16px 0; padding-left: 24px;',
      ol: 'margin: 16px 0; padding-left: 24px;',
      li: 'margin: 6px 0;',
      a: 'color: #42b983; text-decoration: none; font-weight: 600;',
      img: 'max-width: 100%; border-radius: 4px; margin: 20px auto; display: block;',
      table: 'width: 100%; border-collapse: collapse; margin: 20px 0; width: auto; max-width: 100%; display: table;',
      th: 'background: #f8f8f8; padding: 12px; text-align: left; border: 1px solid #dfe2e5; font-weight: 600;',
      td: 'padding: 12px; border: 1px solid #dfe2e5;',
      hr: 'border: none; border-top: 1px solid #eaecef; margin: 30px 0;',
      strong: 'font-weight: 600; color: #2c3e50;'
    }
  },

  // 经典主题 - 完全匹配 markdown.com.cn 编辑器风格
  classic: {
    name: '经典',
    styles: {
      wrapper: 'font-size: 16px; color: black; padding: 25px 30px; line-height: 1.6; word-spacing: 0px; letter-spacing: 0px; word-break: break-word; word-wrap: break-word; text-align: justify; font-family: Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, "PingFang SC", Cambria, Cochin, Georgia, Times, "Times New Roman", serif; margin-top: -10px;',
      h1: 'font-size: 140%; font-weight: normal; color: #3f3f3f; text-align: center; margin: 80px 10px 40px 10px;',
      h2: 'font-size: 140%; font-weight: normal; color: #3f3f3f; text-align: center; margin: 80px 10px 40px 10px;',
      h3: 'font-size: 120%; font-weight: bold; line-height: 1.5; color: #3f3f3f; margin: 40px 0px 20px 0px;',
      h4: 'font-size: 18px; font-weight: bold; color: black; margin: 30px 0 15px 0;',
      h5: 'font-size: 16px; font-weight: bold; color: black; margin: 25px 0 10px 0;',
      h6: 'font-size: 14px; font-weight: bold; color: #666; margin: 20px 0 10px 0;',
      p: 'padding-top: 8px; padding-bottom: 8px; line-height: 1.6; color: #3f3f3f; font-size: 16px; margin: 10px 0px;',
      blockquote: 'display: block; font-size: 0.9em; overflow: auto; overflow-scrolling: touch; padding-top: 10px; padding-bottom: 10px; padding-left: 20px; padding-right: 10px; margin-bottom: 20px; margin-top: 20px; color: rgb(91,91,91); border-left: 3px solid rgb(158,158,158); background: rgba(158, 158, 158, 0.1); padding: 1px 0 1px 10px; margin: 20px 0px;',
      code: 'word-wrap: break-word; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; background: #f8f5ec; color: #ff3502; line-height: 1.5; font-size: 90%; padding: 3px 5px; border-radius: 2px;',
      pre: 'margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;',
      preCode: 'overflow-x: auto; padding: 16px; color: #383a42; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #fafafa; border-radius: 5px;',
      ul: 'margin-top: 8px; margin-bottom: 8px; padding-left: 25px; color: black; list-style-type: disc;',
      ol: 'margin-top: 8px; margin-bottom: 8px; padding-left: 25px; color: black; list-style-type: decimal;',
      li: 'margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;',
      a: 'text-decoration: none; word-wrap: break-word; font-weight: bold; color: #ff3502; border-bottom: 1px solid #ff3502;',
      img: 'max-width: 100%; display: block; margin: 20px auto; border-radius: 4px;',
      table: 'display: table; text-align: left; border-collapse: collapse; margin: 20px auto;',
      th: 'font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; font-weight: bold; background-color: #f0f0f0; text-align: left;',
      td: 'font-size: 16px; border: 1px solid #ccc; padding: 5px 10px; text-align: left;',
      hr: 'height: 1px; margin: 0; margin-top: 10px; margin-bottom: 10px; border: none; border-top: 1px solid black;',
      strong: 'font-weight: bold; color: #ff3502; line-height: 1.5; font-size: 16px;',
      em: 'font-style: italic;',
      del: 'text-decoration: line-through; color: #999;',
      footnote: 'font-size: 12px; color: #ff3502; vertical-align: super;',
      footnoteSection: 'margin-top: 40px; padding-top: 20px; border-top: 1px solid #ccc; font-size: 14px; color: #666;'
    }
  }
};

// Get list of theme names for dropdown
function getThemeList() {
  return Object.keys(themes).map(key => ({
    id: key,
    name: themes[key].name
  }));
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { themes, getThemeList };
}

