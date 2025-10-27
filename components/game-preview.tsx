import { Card } from "@/components/ui/card"

export function GamePreview() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground text-balance">Journey Through Your Gut</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience the vibrant world of your microbiome in stunning 2D
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="overflow-hidden border-4 border-secondary shadow-2xl">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GutworldHealthy.png-TKHyyUcPOAv5Bb083eLHA5dtvtrMPM.jpeg"
                alt="Healthy Gut World"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Healthy Ecosystem</h3>
                  <p className="text-white/90">Thriving microbiome with balanced bacteria</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden border-4 border-red-500 shadow-2xl">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GutworldPolluted.png-yl9OTjm99aBseso5eRAwHjXNGlxxJG.jpeg"
                alt="Polluted Gut World"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Unhealthy Ecosystem</h3>
                  <p className="text-white/90">Imbalanced microbiome needs your help!</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="overflow-hidden shadow-xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Background3-SMDBPu2dSly4vCVQ5glQMNCPNO15yq.jpg"
              alt="Game Scene 1"
              className="w-full h-48 object-cover"
            />
          </Card>
          <Card className="overflow-hidden shadow-xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Background4-XtmOurNtkU5OYNkozuptJVZYHdbivG.jpg"
              alt="Game Scene 2"
              className="w-full h-48 object-cover"
            />
          </Card>
          <Card className="overflow-hidden shadow-xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Background5-hGJvPEGoPYynhpKDQUrs5gelJ4DHwM.jpg"
              alt="Game Scene 3"
              className="w-full h-48 object-cover"
            />
          </Card>
        </div>
      </div>
    </section>
  )
}
