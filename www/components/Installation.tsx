'use client';

import { useState } from 'react';

export function Installation() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const commands = [
    {
      id: 'npx',
      title: 'Use directly (no install)',
      code: 'npx site-to-md https://mysite.com',
    },
    {
      id: 'global',
      title: 'Install globally',
      code: 'npm install -g site-to-md',
    },
    {
      id: 'project',
      title: 'Add to your project',
      code: 'npm install site-to-md',
    },
  ];

  return (
    <section id="installation" className="px-6 py-16 md:py-24 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Start</h2>
        <p className="text-gray-400 text-lg">
          Three ways to use site-to-md
        </p>
      </div>

      <div className="space-y-4">
        {commands.map((command) => (
          <div
            key={command.id}
            className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-colors"
          >
            <div className="px-6 py-3 bg-gray-950 border-b border-gray-800 text-sm text-gray-400">
              {command.title}
            </div>
            <div className="flex items-center">
              <code className="flex-1 px-6 py-4 text-sm md:text-base text-blue-400">
                {command.code}
              </code>
              <button
                onClick={() => handleCopy(command.code, command.id)}
                className="px-6 py-4 hover:bg-gray-800 transition-colors"
                aria-label="Copy command"
              >
                {copied === command.id ? (
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://github.com/dylanfeltus/site-to-md#readme"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          Read the full documentation
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </section>
  );
}
