'use client';

import { useState } from 'react';

export function Hero() {
  const [copied, setCopied] = useState(false);
  const command = 'npx site-to-md https://mysite.com';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="px-6 pt-24 pb-16 md:pt-32 md:pb-24 max-w-5xl mx-auto">
      <div className="text-center space-y-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <span className="text-gray-400">html</span> is for Google.
          <br />
          <span className="text-gray-400">markdown</span> is for AI.
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Make your site readable by every AI agent and chatbot.
          <br />
          One command. Zero config. Open source.
        </p>

        <div className="flex flex-col items-center gap-4 pt-4">
          <div className="relative w-full max-w-2xl group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
            <div className="relative flex items-center bg-black border border-gray-800 rounded-lg overflow-hidden">
              <code className="flex-1 px-6 py-4 text-sm md:text-base text-blue-400">
                {command}
              </code>
              <button
                onClick={handleCopy}
                className="px-6 py-4 bg-gray-900 hover:bg-gray-800 border-l border-gray-800 transition-colors"
                aria-label="Copy command"
              >
                {copied ? (
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

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#installation"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium"
            >
              Get Started →
            </a>
            <a
              href="https://github.com/dylanfeltus/site-to-md"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-lg transition-colors font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub ★
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
