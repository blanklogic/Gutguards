import { Card } from "@/components/ui/card"
import { Sparkles, Heart, Pill, ExternalLink } from "lucide-react"

const facts = [
  {
    icon: Sparkles,
    title: "More Unique Than Your DNA",
    stat: "10-100 Trillion",
    description:
      "The human gut microbiome contains an astounding 10-100 trillion microbial cells, making it one of the most densely populated ecosystems on Earth.",
    citationNumber: 1,
    citationText: "Harvard Medical School",
    citationUrl: "https://hms.harvard.edu/news/microbial-fingerprinting",
    color: "text-primary",
  },
  {
    icon: Heart,
    title: "Your Happiness Factory",
    stat: "95% Serotonin",
    description:
      'Your gut bacteria are master chemists, producing 95% of your body\'s serotonin and 50% of your dopamine - the "happy hormones" that regulate your mood.',
    citationNumber: 2,
    citationText: "American Psychological Association",
    citationUrl: "https://www.apa.org/monitor/2012/09/gut-feeling",
    color: "text-secondary",
  },
  {
    icon: Pill,
    title: "Natural Vitamin Production",
    stat: "8 B Vitamins",
    description:
      "Your gut microbiome can produce B vitamins including biotin (B7), cobalamin (B12), folate (B9), niacin (B3), pantothenate (B5), pyridoxine (B6), riboflavin (B2), and thiamine (B1).",
    citationNumber: 3,
    citationText: "mSystems Journal",
    citationUrl: "https://journals.asm.org/doi/10.1128/msystems.00929-24",
    color: "text-accent",
  },
]

export function FactsSection() {
  return (
    <section id="facts" className="py-24 px-4 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground text-balance font-sans">
            Your Gut is Extraordinary
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover the fascinating science behind your microbiome
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {facts.map((fact, index) => (
            <Card
              key={index}
              className="p-8 bg-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-border"
            >
              <div className="space-y-6">
                <div className={`${fact.color} w-16 h-16 rounded-full bg-muted flex items-center justify-center`}>
                  <fact.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 text-balance font-sans">{fact.title}</h3>
                  <p className={`text-3xl font-bold ${fact.color} mb-4 font-sans`}>{fact.stat}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">{fact.description}</p>
                <a
                  href={fact.citationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground/80 hover:text-foreground transition-colors group"
                >
                  <span className="font-semibold">[{fact.citationNumber}]</span>
                  <span className="flex-1">{fact.citationText}</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
