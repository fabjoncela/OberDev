import React from "react";

export function WhoWeAreSection() {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-8 space-y-10 md:space-y-0">
          {/* Who We Are */}
          <div className="flex-1">
            <div className="text-sm text-gray-500 mb-2 font-light">
              Who We Are
            </div>
            <div className="text-xl md:text-2xl  leading-snug text-black dark:text-black-400">
              As a national leader in our industry,{" "}
              <br className="hidden md:block" />
              Konstruktion is revolutionizing <br className="hidden md:block" />
              what you expect from a contractor.
            </div>
          </div>
          {/* Our Mission */}
          <div className="flex-1">
            <div className="text-sm text-gray-500 mb-2 font-light">
              Our Mission
            </div>
            <div className="text-xl md:text-2xl  leading-snug text-black dark:text-black-400">
              To integrate the entire building{" "}
              <br className="hidden md:block" />
              lifecycle into a seamless platform{" "}
              <br className="hidden md:block" />
              to redefine how the world builds.
            </div>
          </div>
          {/* Core Values */}
          <div className="flex-1">
            <div className="text-sm text-gray-500 mb-2 font-light">
              Core Values
            </div>
            <div className="text-xl md:text-2xl  leading-snug text-black dark:text-black-400">
              Passion. Integrity. Hard
              <br className="hidden md:block" />
              work. Professionalism.
              <br className="hidden md:block" />
              Caring.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
