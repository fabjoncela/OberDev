export function SectorsSection() {
  const sectors = [
    {
      title: "Buildings",
      description:
        "We offers substantial construction experience, competitive pricing, financial strength, integrity and a commitment to your project that is supported by a foundation of quality and workplace safety.",
      tags: ["Residential", "Houses", "Business"],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: "Civil Infrastructure",
      description:
        "The geographical diversity, project complexity and public nature of civil work results in an exceptionally challenging industry that demands a high level of technical construction expertise.",
      tags: ["Hospitality", "Public Buildings", "Museum", "Hospitals"],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 7l4-4 4 4m0 6l-4 4-4-4m-6-2h2m14 0h2M4 12h2m14 0h2"
          />
        </svg>
      ),
    },
    {
      title: "Heavy Industrial",
      description:
        "Konstruktion's industrial construction companies respond to the unique needs of clients in the petrochemical, oil and gas, pulp and paper, mining, and power and renewable industries.",
      tags: ["Factory", "Refinery"],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-card flex justify-center">
      <div className="container px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our sectors</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 justify-items-center">
        {sectors.map((sector, index) => (
        <div key={index} className="text-center">
          <div className="flex justify-center mb-6 text-primary">{sector.icon}</div>
          <h3 className="text-xl font-semibold mb-4">{sector.title}</h3>
          <p className="text-sm  leading-relaxed mb-6 text-gray-500">{sector.description}</p>
          <div className="flex flex-wrap justify-center gap-2">
          {sector.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="px-3 py-1 text-xs bg-background rounded-full border">
            {tag}
            </span>
          ))}
          </div>
        </div>
        ))}
      </div>
      </div>
    </section>
  )
}
