import { Button } from "@/components/ui/button"
import { Gamepad2, BookOpen } from "lucide-react"

export function CallToAction() {
  return (
    <section id="play" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Background6-VkFcUvEEm62PZSkkZHbTFFTyhEfYzP.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/95 via-stone-800/90 to-stone-900/95" />
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <div className="space-y-8">
          <h2
            className="text-5xl md:text-6xl font-bold text-white text-balance font-sans"
            style={{ textShadow: "2px 4px 8px rgba(0,0,0,0.8)" }}
          >
            Play a Game to Learn About Your Microbiome
          </h2>
          <p
            className="text-xl md:text-2xl text-white max-w-2xl mx-auto leading-relaxed"
            style={{ textShadow: "1px 2px 4px rgba(0,0,0,0.8)" }}
          >
            Slide through levels, collect good bacteria, and defend against harmful invaders. Education has never been
            this fun!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg px-8 py-6 rounded-full shadow-2xl gap-2"
            >
              <Gamepad2 className="w-5 h-5" />
              Start Playing
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white font-bold text-lg px-8 py-6 rounded-full shadow-xl gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
