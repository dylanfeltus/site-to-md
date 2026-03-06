'use client';

import { useState } from 'react';

type Tab = 'llms' | 'markdown' | 'context';

export function OutputExamples() {
  const [activeTab, setActiveTab] = useState<Tab>('llms');

  const examples = {
    llms: `# My Product

> Developer documentation for building with My Product

## Documentation

- [Getting Started](/docs/getting-started.html.md): Quick start guide
- [API Reference](/docs/api-reference.html.md): Complete API docs
- [Configuration](/docs/config.html.md): Configuration options

## Blog

- [Announcing v2.0](/blog/v2-release.html.md): New features and improvements
- [Best Practices](/blog/best-practices.html.md): How to get the most out of it`,

    markdown: `# Getting Started

Welcome to My Product! This guide will help you get up and running in minutes.

## Installation

\`\`\`bash
npm install my-product
\`\`\`

## Quick Start

1. Import the library
2. Configure your options
3. Start building

## Next Steps

- Read the [API Reference](/docs/api-reference.html.md)
- Check out [examples](https://github.com/example/examples)`,

    context: `# My Product

> Developer documentation for building with My Product

---

## Getting Started

Welcome to My Product! This guide will help you get up and running in minutes.

### Installation

\`\`\`bash
npm install my-product
\`\`\`

---

## API Reference

Complete API documentation for all methods and options...

---

## Configuration

Learn how to configure My Product for your use case...`,
  };

  const tabs: { id: Tab; label: string; file: string }[] = [
    { id: 'llms', label: 'Index', file: '/llms.txt' },
    { id: 'markdown', label: 'Page', file: '/docs/getting-started.html.md' },
    { id: 'context', label: 'Context', file: '/llms-ctx.txt' },
  ];

  return (
    <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What it generates</h2>
        <p className="text-gray-400 text-lg">
          Three files that make your site instantly readable by AI agents
        </p>
      </div>

      <div className="bg-gray-950 border border-gray-800 rounded-lg overflow-hidden">
        {/* Tab headers */}
        <div className="flex border-b border-gray-800 bg-gray-900">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-gray-950 text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800'
              }`}
            >
              <div className="font-mono">{tab.file}</div>
            </button>
          ))}
        </div>

        {/* Code display */}
        <div className="p-6 overflow-x-auto">
          <pre className="text-sm md:text-base text-gray-300 leading-relaxed">
            <code>{examples[activeTab]}</code>
          </pre>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
          <div className="font-mono text-blue-400 mb-2">/llms.txt</div>
          <p className="text-gray-400 text-sm">
            Index file listing all pages with descriptions — the entry point for AI agents
          </p>
        </div>
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
          <div className="font-mono text-blue-400 mb-2">*.html.md</div>
          <p className="text-gray-400 text-sm">
            Clean markdown for each page — no nav, footer, ads, or scripts
          </p>
        </div>
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
          <div className="font-mono text-blue-400 mb-2">/llms-ctx.txt</div>
          <p className="text-gray-400 text-sm">
            All content in one file — for single-prompt ingestion
          </p>
        </div>
      </div>
    </section>
  );
}
