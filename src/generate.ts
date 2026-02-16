import type { PageResult, AgentReadyConfig } from "./types.js";

/** Assign pages to sections based on config or auto-detect from URL structure */
function assignSections(pages: PageResult[], config: AgentReadyConfig): PageResult[] {
  if (config.sections) {
    // Use configured sections
    const sectionEntries = Object.entries(config.sections);
    return pages.map((page) => {
      for (const [name, pattern] of sectionEntries) {
        const regex = new RegExp(
          "^" + pattern.replace(/\*\*/g, ".*").replace(/\*/g, "[^/]*") + "$"
        );
        if (regex.test(page.path)) {
          return { ...page, section: name };
        }
      }
      return page;
    });
  }

  // Auto-detect sections from first path segment
  return pages.map((page) => {
    const segments = page.path.split("/").filter(Boolean);
    if (segments.length >= 2) {
      const section = segments[0].charAt(0).toUpperCase() + segments[0].slice(1);
      return { ...page, section };
    }
    return page;
  });
}

/** Generate /llms.txt content per llmstxt.org spec */
export function generateLlmsTxt(pages: PageResult[], config: AgentReadyConfig): string {
  const title = config.title || "Website";
  const desc = config.description || pages[0]?.description || "Documentation and content";

  const pagesWithSections = assignSections(pages, config);

  let output = `# ${title}\n\n`;
  output += `> ${desc}\n\n`;

  // Group by section
  const sections = new Map<string, PageResult[]>();
  const unsectioned: PageResult[] = [];

  for (const page of pagesWithSections) {
    if (page.section) {
      if (!sections.has(page.section)) sections.set(page.section, []);
      sections.get(page.section)!.push(page);
    } else {
      unsectioned.push(page);
    }
  }

  // Write unsectioned pages first
  for (const page of unsectioned) {
    const mdPath = page.path === "/" || page.path === "/index"
      ? "/index.html.md"
      : `${page.path}.html.md`;
    output += `- [${page.title}](${mdPath})${page.description ? `: ${page.description}` : ""}\n`;
  }

  if (unsectioned.length > 0 && sections.size > 0) output += "\n";

  // Write sections
  for (const [section, sectionPages] of sections) {
    output += `## ${section}\n\n`;
    for (const page of sectionPages) {
      const mdPath = `${page.path}.html.md`;
      output += `- [${page.title}](${mdPath})${page.description ? `: ${page.description}` : ""}\n`;
    }
    output += "\n";
  }

  return output.trimEnd() + "\n";
}

/** Generate /llms-ctx.txt — all content inline for single-prompt ingestion */
export function generateLlmsCtx(pages: PageResult[], config: AgentReadyConfig): string {
  const title = config.title || "Website";
  const desc = config.description || "Full content for AI agent consumption";

  let output = `# ${title}\n\n`;
  output += `> ${desc}\n\n`;
  output += `---\n\n`;

  for (const page of pages) {
    output += `## ${page.title}\n\n`;
    output += `Source: ${page.url}\n\n`;
    output += page.markdown + "\n\n";
    output += `---\n\n`;
  }

  return output.trimEnd() + "\n";
}
