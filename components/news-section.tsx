"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";

export function NewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const isDragging = useRef(false);

  const articles = [
    {
      category: "News",
      title: "Ober Construction: Modern Living in Albania",
      description:
        "Our people are dedicated to finding solutions to every challenge. That spirit makes for some great stories.",
      image: "/aaaa.png",
    },
    {
      category: "Report",
      title:
        "Investing in Real Estate in Albania: Why Oberon Residence is the Best Choice",
      description:
        "How we maintain the highest safety standards across all our construction projects and worksites.",
      image: "/invReal.jpg",
    },
    {
      category: "Insight",
      title: "Luxury living in Albania: the rise of high-standard residences",
      description:
        "How we maintain the highest safety standards across all our construction projects and worksites.",
      image: "/luxury.jpg",
    },
    {
      category: "Update",
      title:
        "The Growth of the Construction Sector in Albania: Trends and Opportunities",
      description:
        "How we maintain the highest safety standards across all our construction projects and worksites.",
      image: "/growth.png",
    },
    {
      category: "Update",
      title:
        "Sustainable Construction in Albania: Challenges and Future Prospects",
      description: "",
      image: "/sust.jpg",
    },
    {
      category: "Update",
      title: "5 Essential Facts About Quality Construction in Albania",
      description: "",
      image: "/5essent.png",
    },
    {
      category: "Update",
      title: "Oberon Residence: Perfect Details for Unmatched Quality",
      description: "",
      image: "/OberonTower.png",
    },
  ];

  const getItemsPerView = () => {
    if (typeof window === "undefined") return 2;
    if (window.innerWidth >= 1024) return 2; // lg screens
    if (window.innerWidth >= 768) return 2; // md screens
    return 1; // mobile
  };

  const [itemsPerView, setItemsPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, articles.length - itemsPerView);

  // Clamp currentIndex if itemsPerView or articles.length changes
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [itemsPerView, articles.length, maxIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    startX.current = e.touches[0].pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              {/* <span className="text-sm font-medium text-muted">News</span> */}
              <div className="w-12 h-0.5 bg-accent ml-4"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Recent Articles</h2>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Our people are dedicated to finding solutions to every challenge.
              That spirit makes for some great stories.
            </p>
          </div>

          <div className="lg:col-span-2">
            {/* Mobile navigation buttons */}
            <div className="flex justify-between items-center mb-4 md:hidden">
              <button
                onClick={goToPrev}
                disabled={currentIndex === 0}
                className="p-2 rounded-full bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg
                  className="w-5 h-5"
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
              </button>
              <button
                onClick={goToNext}
                disabled={currentIndex >= maxIndex}
                className="p-2 rounded-full bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg
                  className="w-5 h-5"
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
              </button>
            </div>

            {/* Carousel container */}
            <div
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Desktop hover arrows */}
              <button
                onClick={goToPrev}
                disabled={currentIndex === 0}
                className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hidden md:flex ${
                  isHovered && currentIndex > 0 ? "opacity-100" : "opacity-0"
                }`}
              >
                <svg
                  className="w-6 h-6"
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
              </button>

              <button
                onClick={goToNext}
                disabled={currentIndex >= maxIndex}
                className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hidden md:flex ${
                  isHovered && currentIndex < maxIndex
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              >
                <svg
                  className="w-6 h-6"
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
              </button>

              {/* Articles carousel */}
              <div
                ref={carouselRef}
                className="overflow-hidden cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
              >
                <div
                  className="flex transition-transform duration-300 ease-in-out gap-6"
                  style={{
                    transform: `translateX(-${
                      currentIndex * (100 / itemsPerView)
                    }%)`,
                    width: "100%",
                  }}
                >
                  {articles.map((article, index) => (
                    <article
                      key={index}
                      className="cursor-pointer flex-shrink-0"
                      style={{ width: `${100 / itemsPerView}%` }}
                    >
                      <div className="group aspect-[4/3] bg-gray-200 rounded-lg mb-4 overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-2">
                          {article.category}
                        </p>
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-accent-foreground transition-colors">
                          {article.title}
                        </h3>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-accent" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
