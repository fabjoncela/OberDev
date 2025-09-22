"use client"
import { useEffect, useState } from "react"

type Stat = {
  number: string
  label: string
}

export function StatsSection() {
  const stats: Stat[] = [
    { number: "100%", label: "Employee Owned" },
    { number: "50", label: "Project in various industries" },
    { number: "20", label: "With nearly 20 years in business" },
  ]

  return (
    <section className="py-16 md:py-24 bg-background flex justify-center items-center">
      <div className="container px-4 md:px-6 flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center">
          {/* Left side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center lg:text-left">
              Building for
              <br />
              the best.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-md text-center lg:text-left">
              To explore and go after new ways to build, we've gathered the people, innovations, and partnerships that
              can anticipate and overcome new challenges.
            </p>

            <div className="space-y-6">
              <div className="pb-4">
                <h3 className="font-semibold mb-2 text-center lg:text-left">Innovation</h3>
              </div>
              <div className="pb-4">
                <h3 className="font-semibold mb-2 text-center lg:text-left">A strong foundation</h3>
              </div>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="space-y-8 flex flex-col items-center">
            {stats.map((stat, index) => (
              <StatItem key={index} number={stat.number} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Small component that animates numbers
function StatItem({ number, label }: { number: string; label: string }) {
  const isPercent = number.includes("%")
  const target = parseInt(number) // strip % if present
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 1500 // ms
    const step = (timestamp: number, startTime: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame((t) => step(t, startTime))
    }
    requestAnimationFrame((t) => step(t, t))
  }, [target])

  return (
    <div className="text-right w-full flex flex-col items-center">
      <div className="text-4xl md:text-6xl font-bold text-primary mb-2">
        {count}
        {isPercent && "%"}
      </div>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  )
}
