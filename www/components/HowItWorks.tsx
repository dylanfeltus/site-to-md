export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Point it at your site',
      description: 'Pass a URL or local build output directory. Works with any HTML.',
    },
    {
      number: '02',
      title: 'Extract clean content',
      description: 'Uses Mozilla Readability to strip nav, ads, scripts — just the content.',
    },
    {
      number: '03',
      title: 'Generate agent-ready files',
      description: 'Creates /llms.txt index + markdown files per the llmstxt.org spec.',
    },
  ];

  return (
    <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
        <p className="text-gray-400 text-lg">
          Three simple steps to make your site AI-agent-readable
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={step.number} className="relative">
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
            )}
            <div className="relative">
              <div className="text-6xl font-bold text-blue-500/20 mb-4">{step.number}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
