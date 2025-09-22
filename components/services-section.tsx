export function ServicesSection() {
  const services = [
    { number: "01", title: "Construction" },
    { number: "02", title: "Pre-Construction" },
    { number: "03", title: "Design - Build" },
    { number: "04", title: "Lump-Sum Contracting" },
  ]

  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-sm font-medium text-white/80">Services</span>
              <div className="w-12 h-0.5 bg-accent ml-4"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Providing exceptional construction services and insight from the start.
            </h2>
          </div>

          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center py-4 border-b border-white/20 last:border-b-0">
                <span className="text-sm font-medium text-white/60 mr-6 w-8">{service.number}</span>
                <h3 className="text-lg font-medium">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
