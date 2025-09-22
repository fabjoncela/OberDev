import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { SectorsSection } from "@/components/sectors-section"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import { NewsSection } from "@/components/news-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SectorsSection />
        <ServicesSection />
        <StatsSection />
        <NewsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
