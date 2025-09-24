
import React from "react";
import { translations, Language } from "../lib/i18n";

interface WhoWeAreSectionProps {
  lang: Language;
}


export function WhoWeAreSection({ lang }: WhoWeAreSectionProps) {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-8 space-y-10 md:space-y-0">
          {/* Who We Are */}
          <div className="flex-1">
            <div className="text-sm text-gray-500 mb-2 font-light">
              {translations[lang].whoWeAreSection.whoWeAreTitle}
            </div>
            <div className="text-xl md:text-2xl  leading-snug text-black dark:text-black-400">
              {translations[lang].whoWeAreSection.whoWeAreText}
            </div>
          </div>
          {/* Our Mission */}
          <div className="flex-1">
            <div className="text-sm text-gray-500 mb-2 font-light">
              {translations[lang].whoWeAreSection.missionTitle}
            </div>
            <div className="text-xl md:text-2xl  leading-snug text-black dark:text-black-400">
              {translations[lang].whoWeAreSection.missionText}
            </div>
          </div>
          {/* Core Values */}
          <div className="flex-1">
            <div className="text-sm text-gray-500 mb-2 font-light">
              {translations[lang].whoWeAreSection.coreValuesTitle}
            </div>
            <div className="text-xl md:text-2xl  leading-snug text-black dark:text-black-400">
              {translations[lang].whoWeAreSection.coreValuesText}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
