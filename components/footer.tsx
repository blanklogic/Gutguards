import { Heart } from "lucide-react"

const teamMembers = ["Jaymeson", "Jun Kang", "Luna", "Clif", "Xinxiang", "Nabillah"]

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-stone-800 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
            <span className="text-white/80">© 2025 Gut Guards.</span>
            <span className="text-white/80">An educational project by NUS College students.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <Heart className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-white/70 text-sm">
              Made with love by{" "}
              <span className="text-amber-400 font-semibold">
                {teamMembers.slice(0, -1).join(", ")} and {teamMembers[teamMembers.length - 1]}
              </span>
            </span>
          </div>

          <p className="text-xs text-white/50">16 College Ave W, National University of Singapore, Singapore 138527</p>
        </div>
      </div>
    </footer>
  )
}
