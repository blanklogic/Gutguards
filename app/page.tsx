import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FactsSection } from "@/components/facts-section"
import { GamePreview } from "@/components/game-preview"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="facts">
        <FactsSection />
      </div>
      <div id="game">
        <GamePreview />
      </div>
      <div id="play">
        <CallToAction />
      </div>
      <Footer />
    </main>
  )
}
