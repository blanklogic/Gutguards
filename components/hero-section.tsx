"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToFacts = () => {
    document.getElementById("facts")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Background2-k0qrrcQJjFNXtebp21QGREzrMvDGlR.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl text-balance">Gut Guards</h1>
          <p className="text-2xl md:text-3xl text-white/95 drop-shadow-lg font-medium text-balance">
            Defend Your Inner Ecosystem
          </p>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
            Embark on an epic 2D adventure through your microbiome. Learn how trillions of tiny heroes protect your
            health while having fun!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg px-8 py-6 rounded-full shadow-2xl"
              onClick={scrollToFacts}
            >
              Discover Your Microbiome
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white hover:bg-gray-50 text-stone-800 border-2 border-white font-bold text-lg px-8 py-6 rounded-full shadow-xl"
            >
              Play Now
            </Button>
          </div>
          <div className="pt-12 animate-bounce">
            <ArrowDown className="w-8 h-8 text-white/80 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
