export function Companies() {
  const companies = [
    { name: 'Anthropic', url: 'https://docs.anthropic.com/llms.txt' },
    { name: 'Cloudflare', url: 'https://developers.cloudflare.com/llms.txt' },
    { name: 'Stripe', url: 'https://docs.stripe.com/llms.txt' },
    { name: 'Vercel', url: 'https://vercel.com/llms.txt' },
  ];

  return (
    <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Companies shipping /llms.txt</h2>
        <p className="text-gray-400 text-lg">
          Leading companies are already making their sites agent-readable
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {companies.map((company) => (
          <a
            key={company.name}
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-gray-900 border border-gray-800 rounded-lg hover:border-blue-500 transition-colors text-center group"
          >
            <div className="font-semibold text-gray-300 group-hover:text-blue-400 transition-colors">
              {company.name}
            </div>
            <div className="text-xs text-gray-500 mt-2 font-mono group-hover:text-gray-400 transition-colors">
              /llms.txt
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://llmstxt.org"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          Learn about the llms.txt spec
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </section>
  );
}
