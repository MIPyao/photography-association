import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { NewsSection } from "@/components/news-section"
import { ActivitiesSection } from "@/components/activities-section"
import { ExhibitionCarousel } from "@/components/exhibition-carousel"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <NewsSection />
      <ActivitiesSection />
      <ExhibitionCarousel />
      <Footer />
    </main>
  )
}
