import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SectorsSection } from "@/components/sectors-section";
import { ServicesSection } from "@/components/services-section";
import { StatsSection } from "@/components/stats-section";
import { NewsSection } from "@/components/news-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { WhoWeAreSection } from "@/components/who-we-are-section";
import type { Language } from "@/lib/i18n";

interface Props {
  params: { lang: Language };
}

export default function LangHomePage({ params }: Props) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection lang={params.lang} />
        <WhoWeAreSection lang={params.lang} />
        <ProjectsSection />
        <SectorsSection />
        <ServicesSection />
        <StatsSection />
        <NewsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  const languages: Language[] = ["en", "al", "it"];
  return languages.map((lang) => ({ lang }));
}
