export function TerminalDemo() {
  return (
    <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto">
      <div className="bg-gray-950 border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-gray-800">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 text-center text-sm text-gray-500">
            Terminal
          </div>
        </div>

        {/* Terminal content */}
        <div className="p-6 font-mono text-sm md:text-base space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-blue-400">$</span>
            <span className="text-gray-300">npx site-to-md https://site-to-md.stratuslabs.io</span>
          </div>

          <div className="pt-2 space-y-1 text-gray-400">
            <div className="flex items-start gap-2">
              <span>🤖</span>
              <span className="text-white font-semibold">site-to-md</span>
            </div>
            <div>Making https://site-to-md.stratuslabs.io agent-readable...</div>
            <div className="flex items-start gap-2 text-green-400">
              <span>✓</span>
              <span>Done in 0.6s</span>
            </div>
          </div>

          <div className="pt-4 space-y-1 text-gray-400">
            <div>Output:</div>
            <div className="flex items-start gap-2 pl-2">
              <span>📄</span>
              <span className="text-blue-300">/site-to-md.stratuslabs.io-md</span>
            </div>
            <div className="pl-6 space-y-0.5 text-gray-500">
              <div>llms.txt</div>
              <div>llms-ctx.txt</div>
              <div>index.html.md</div>
            </div>
            <div className="pt-2 text-green-400">1 page converted to markdown</div>
          </div>
        </div>
      </div>
    </section>
  );
}
