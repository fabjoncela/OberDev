"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const words = ["Succeed.", "Innovate."];

function AnimatedWord() {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [nextWord, setNextWord] = useState(words[1]);
  const [phase, setPhase] = useState("idle"); // idle | out | in
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  useEffect(() => {
    if (phase === "idle") {
      const timeout = setTimeout(() => setPhase("out"), 2000);
      return () => clearTimeout(timeout);
    }
    if (phase === "out") {
      let i = 0;
      setActiveIndexes([]);
      const interval = setInterval(() => {
        setActiveIndexes((prev) => [...prev, currentWord.length - 1 - i]);
        i++;
        if (i >= currentWord.length) {
          clearInterval(interval);
          setTimeout(() => {
            setPhase("in");
            setCurrentWord(nextWord);
            setActiveIndexes([]);
          }, 200);
        }
      }, 70);
      return () => clearInterval(interval);
    }
    if (phase === "in") {
      let i = 0;
      setActiveIndexes([]);
      const interval = setInterval(() => {
        setActiveIndexes((prev) => [...prev, nextWord.length - 1 - i]);
        i++;
        if (i >= nextWord.length) {
          clearInterval(interval);
          setTimeout(() => {
            setPhase("idle");
            setNextWord(currentWord === words[0] ? words[1] : words[0]);
            setActiveIndexes([]);
          }, 2000);
        }
      }, 70);
      return () => clearInterval(interval);
    }
  }, [phase, currentWord, nextWord]);

  return (
    <span className="inline-block">
      {[...(phase === "in" ? nextWord : currentWord)].map((char, idx, arr) => {
        let className = "inline-block transition-all duration-300 ease-in-out";
        // Reverse the delay order for right-to-left
        const delay = `${(arr.length - 1 - idx) * 60}ms`;
        if (phase === "out" && activeIndexes.includes(idx)) {
          className += " scale-0 opacity-0";
        } else if (phase === "in") {
          className += activeIndexes.includes(idx)
            ? " scale-100 opacity-100"
            : " scale-0 opacity-0";
        }
        return (
          <span
            key={idx}
            className={className}
            style={{ transitionDelay: delay }}
          >
            {phase === "in" ? nextWord[idx] || "" : char}
          </span>
        );
      })}
    </span>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <video
        className="absolute inset-0 w-full h-full max-h-screen object-cover object-center pointer-events-none z-0 blur-md"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/test.webm" type="video/webm" />
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="container px-4 md:px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center lg:justify-end">
            <div className="text-white mt-24">
              <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
                Build. Invest.
                <br />
                <AnimatedWord />
              </h1>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-medium px-8 rounded-none"
              >
                OUR SERVICES
              </Button>
            </div>
          </div>
          {/* Removed the card from the grid */}
        </div>
      </div>
      {/* Card fixed at bottom-right above the video */}
      <div className="absolute bottom-0 right-0 bg-white px-10 py-6 rounded-none shadow-2xl max-w-2xl w-full z-20">
        <h3 className="text-2xl  mb-3 text-primary flex flex-col">
          <span className="flex items-center gap-3">Buy your dream home </span>
          <span className="flex items-center gap-3">
            in Albania.
            <div className="w-16 h-0.5 bg-orange-500 ml-3"></div>
          </span>
        </h3>
        {/* <p className="text-base text-gray-400 mb-6">Contact us</p> */}
        {/* <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
          Contact us
        </Button> */}
        <button className="pt-6 text-base relative group transition-colors duration-200 hover:text-orange-500">
          Contact us
          <span
            className="absolute left-0 -bottom-0.5 h-0.5 bg-orange-500 w-0 group-hover:w-full transition-all duration-500"
            style={{ transitionProperty: "width" }}
          />
        </button>
      </div>
    </section>
  );
}
