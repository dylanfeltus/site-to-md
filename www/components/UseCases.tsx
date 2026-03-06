export function UseCases() {
  const cases = [
    {
      icon: '🔧',
      title: 'Build Pipeline Integration',
      description: 'Add to your build script: "next build && site-to-md ./out"',
      code: '"build": "next build && site-to-md ./out"',
    },
    {
      icon: '🤖',
      title: 'AI Coding Assistants',
      description: 'Make your docs searchable by Claude, ChatGPT, Cursor, and other AI tools',
      code: null,
    },
    {
      icon: '📚',
      title: 'Training Data',
      description: 'Generate clean markdown from your own site for fine-tuning or RAG',
      code: null,
    },
    {
      icon: '🔍',
      title: 'SEO for the AI Era',
      description: 'Get discovered by AI agents, chatbots, and the next generation of search',
      code: null,
    },
  ];

  return (
    <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Use cases</h2>
        <p className="text-gray-400 text-lg">
          Why you need /llms.txt on your site
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cases.map((useCase) => (
          <div
            key={useCase.title}
            className="p-6 bg-gray-900 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors"
          >
            <div className="text-4xl mb-4">{useCase.icon}</div>
            <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
            <p className="text-gray-400 mb-4">{useCase.description}</p>
            {useCase.code && (
              <div className="p-3 bg-black border border-gray-800 rounded font-mono text-sm text-blue-400">
                {useCase.code}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
