import { JSDOM } from "jsdom";
import { Readability } from "@mozilla/readability";
import TurndownService from "turndown";
import type { AgentReadyConfig, PageResult } from "./types.js";

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
});

// Better code block handling
turndown.addRule("pre-code", {
  filter: (node) => node.nodeName === "PRE" && !!node.querySelector("code"),
  replacement: (_content, node) => {
    const code = (node as HTMLElement).querySelector("code");
    if (!code) return _content;
    const lang = code.className?.match(/language-(\w+)/)?.[1] || "";
    return `\n\`\`\`${lang}\n${code.textContent?.trim()}\n\`\`\`\n`;
  },
});

// Strip images with no alt text
turndown.addRule("img-cleanup", {
  filter: "img",
  replacement: (_content, node) => {
    const alt = (node as HTMLElement).getAttribute("alt");
    const src = (node as HTMLElement).getAttribute("src");
    if (!alt && !src) return "";
    return alt ? `![${alt}](${src || ""})` : "";
  },
});

/** Default selectors to strip from HTML before extraction */
const DEFAULT_STRIP = [
  "nav", "footer", "header",
  "[role='navigation']", "[role='banner']", "[role='contentinfo']",
  ".cookie-banner", ".cookie-consent", "#cookie-banner",
  ".ad", ".ads", ".advertisement",
  "script", "style", "noscript", "iframe",
  ".sidebar", "aside",
];

/** Extract readable content from HTML and convert to markdown */
export function extractPage(
  url: string,
  html: string,
  config: AgentReadyConfig
): PageResult | null {
  const dom = new JSDOM(html, { url });
  const doc = dom.window.document;

  // Strip unwanted elements
  const selectors = [...DEFAULT_STRIP, ...(config.stripSelectors || [])];
  for (const sel of selectors) {
    try {
      doc.querySelectorAll(sel).forEach((el) => el.remove());
    } catch { /* invalid selector */ }
  }

  // Extract with Readability
  const reader = new Readability(doc, {
    charThreshold: 50,
  });
  const article = reader.parse();

  if (!article || !article.textContent?.trim()) {
    return null;
  }

  // Convert to markdown
  const markdown = turndown.turndown(article.content).trim();
  if (!markdown || markdown.length < 20) return null;

  // Build path from URL
  const parsed = new URL(url);
  let path = parsed.pathname;
  if (path === "/") path = "/index";
  if (path.endsWith("/")) path = path.slice(0, -1);
  // Strip .html/.htm extension — we'll add .html.md in output
  path = path.replace(/\.html?$/, "");

  // Get meta description
  const metaDesc = dom.window.document
    .querySelector('meta[name="description"]')
    ?.getAttribute("content") || undefined;

  return {
    url,
    path,
    title: article.title || parsed.pathname,
    markdown: `# ${article.title || "Untitled"}\n\n${markdown}`,
    description: metaDesc || article.excerpt || undefined,
  };
}

/** Extract from a local HTML file */
export function extractLocalFile(
  filePath: string,
  html: string,
  basePath: string,
  config: AgentReadyConfig
): PageResult | null {
  // Create a fake URL for JSDOM
  const relativePath = filePath.replace(basePath, "").replace(/\\/g, "/");
  const fakeUrl = `http://localhost${relativePath}`;

  const result = extractPage(fakeUrl, html, config);
  if (!result) return null;

  // Fix the path to be relative
  result.path = relativePath.replace(/\.html?$/, "").replace(/\/index$/, "/");
  result.url = relativePath;

  return result;
}
