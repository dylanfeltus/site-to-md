export function FrameworkSupport() {
  const frameworks = [
    { name: 'Next.js', color: 'text-gray-300' },
    { name: 'Gatsby', color: 'text-purple-400' },
    { name: 'Astro', color: 'text-orange-400' },
    { name: 'Hugo', color: 'text-pink-400' },
    { name: 'Jekyll', color: 'text-red-400' },
    { name: 'Docusaurus', color: 'text-green-400' },
    { name: 'VitePress', color: 'text-blue-400' },
    { name: 'Any HTML', color: 'text-yellow-400' },
  ];

  return (
    <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Framework support</h2>
        <p className="text-gray-400 text-lg mb-8">
          Works with any framework that outputs HTML
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {frameworks.map((framework) => (
          <div
            key={framework.name}
            className="px-6 py-3 bg-gray-900 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors"
          >
            <span className={`font-medium ${framework.color}`}>{framework.name}</span>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-gray-500 italic">
          If it generates HTML, it works with site-to-md
        </p>
      </div>
    </section>
  );
}
