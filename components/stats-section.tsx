"use client";
import { useEffect, useState, useRef } from "react";

import { translations, Language } from "../lib/i18n";

interface StatsSectionProps {
  lang: Language;
}

type Stat = {
  number: string;
  label: string;
};

export function StatsSection({ lang }: StatsSectionProps) {
  const t = (translations as Record<string, any>)[lang].statsSection;
  const stats: Stat[] = t.stats;
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ref = sectionRef.current;
    if (!ref) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-background flex justify-center items-center"
    >
      <div className="container px-4 md:px-6 flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center">
          {/* Left side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center lg:text-left">
              {t.title1}
              <br />
              {t.title2}
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-md text-center lg:text-left">
              {t.description}
            </p>

            <div className="space-y-6">
              <div className="pb-4">
                <h3 className="font-semibold mb-2 text-center lg:text-left">
                  {t.innovation}
                </h3>
              </div>
              <div className="pb-4">
                <h3 className="font-semibold mb-2 text-center lg:text-left">
                  {t.foundation}
                </h3>
              </div>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="space-y-8 flex flex-col items-center">
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                number={stat.number}
                label={stat.label}
                animate={visible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Small component that animates numbers
function StatItem({
  number,
  label,
  animate,
}: {
  number: string;
  label: string;
  animate: boolean;
}) {
  const isPercent = number.includes("%");
  const target = parseInt(number);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) {
      setCount(0);
      return;
    }
    let start = 0;
    const duration = 1500; // ms
    const delay = 400; // ms delay before animation starts
    const startAnimation = () => {
      const step = (timestamp: number, startTime: number) => {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) requestAnimationFrame((t) => step(t, startTime));
      };
      requestAnimationFrame((t) => step(t, t));
    };
    const timeout = setTimeout(startAnimation, delay);
    return () => clearTimeout(timeout);
  }, [target, animate]);

  return (
    <div className="text-right w-full flex flex-col items-center">
      <div className="text-4xl md:text-6xl font-bold text-primary mb-2">
        {count}
        {isPercent && "%"}
      </div>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
}
