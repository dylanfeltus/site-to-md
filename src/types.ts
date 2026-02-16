export interface AgentReadyConfig {
  // Input
  url?: string;
  dir?: string;
  sitemap?: boolean;

  // Filtering
  include?: string[];
  exclude?: string[];

  // Output
  outDir?: string;
  llmsTxt?: boolean;
  llmsCtx?: boolean;

  // Customization
  title?: string;
  description?: string;
  sections?: Record<string, string>;

  // Crawl settings
  maxDepth?: number;
  concurrency?: number;
  stripSelectors?: string[];
}

export interface PageResult {
  url: string;
  path: string;
  title: string;
  markdown: string;
  description?: string;
  section?: string;
}

export interface GenerateResult {
  pages: PageResult[];
  llmsTxt: string;
  llmsCtx?: string;
  outputDir: string;
}
