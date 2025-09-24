"use client";

import { translations } from "@/lib/i18n";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/components/language-provider";

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const getItemsPerView = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 3; // lg screens
    if (window.innerWidth >= 768) return 2; // md screens
    return 1; // mobile
  };

  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { language } = useLanguage();
  const projects = translations[language].projects;
  const t = translations[language].projectsSection;
  const maxIndex = Math.max(0, projects.length - itemsPerView);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const endX = e.changedTouches[0].clientX;
    const diffX = startX.current - endX;

    if (Math.abs(diffX) > 50) {
      // Minimum swipe distance
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  // Removed duplicate declarations

  return (
    <section
      id="work"
      className="py-16 md:py-24 bg-background flex justify-center"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <span className="text-sm font-medium text-black-700">
              {t.subtitle}
            </span>
            <div className="w-12 h-0.5 bg-accent ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-5xl  leading-tight max-w-4xl">
            {t.title}
          </h2>
          {/* <Button variant="link" className="mt-4 p-0 text-black-700 hover:text-accent/80">
            View all projects →
          </Button> */}
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* left arrow */}
          <div
            className={`hidden lg:block absolute left-4 top-[40%] -translate-y-1/2 z-10 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Button
              variant="secondary"
              size="sm"
              onClick={prevSlide}
              disabled={isTransitioning || currentIndex === 0}
              className="rounded-full w-12 h-12 p-0 bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </Button>
          </div>

          {/* right arrow */}
          <div
            className={`hidden lg:block absolute right-4 top-[40%] -translate-y-1/2 z-10 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Button
              variant="secondary"
              size="sm"
              onClick={nextSlide}
              disabled={isTransitioning || currentIndex >= maxIndex}
              className="rounded-full w-12 h-12 p-0 bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </div>

          <div className="flex justify-end gap-2 mb-6 lg:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              disabled={isTransitioning}
              className="rounded-full w-10 h-10 p-0 border-2 bg-transparent"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              disabled={isTransitioning}
              className="rounded-full w-10 h-10 p-0 border-2 bg-transparent"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </div>

          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <Link
                    href={`/${language}/projects/${project.slug}`}
                    className="group relative overflow-hidden bg-card block focus:outline-none"
                  >
                    <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105${
                          project.slug === "oberon-tower" ? " blur-xs" : ""
                        }`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 right-0 transition-opacity duration-300 opacity-100 p-0 m-0">
                        {/* the plus + div in the corner of the img */}
                        <div className="relative">
                          <div
                            className="w-13 h-13 p-0 m-0 absolute bottom-0 right-0 bg-white flex items-center justify-center select-none group"
                            style={{ borderRadius: 0 }}
                          >
                            {/* Animated tooltip */}
                            <div
                              className="absolute right-full bottom-0 mb-0 mr-0 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 ease-in-out bg-white text-black flex items-center justify-center shadow-lg pointer-events-none select-none font-normal text-xs  whitespace-nowrap px-3 h-13"
                              style={{ borderRadius: 0 }}
                            >
                              View Project
                            </div>
                            <svg
                              className="h-6 w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-gray-500 mb-1">{t.subtitle}</p>
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 300);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? "bg-accent" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
