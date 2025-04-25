import { ParticlesBackground } from "@/components/ui/particles-background"
import { AnimatedText } from "@/components/ui/animated-text"
import { Magnetic } from "@/components/ui/magnetic"

export default function Home() {
  return (
    <main className="relative">
      {/* Particles Background */}
      <ParticlesBackground particleCount={50} particleColor="#fbbf24" className="opacity-30" />
      
      {/* Rest of your content */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* ... other existing elements ... */}
        
        <div className="container mx-auto px-4 text-center">
          <AnimatedText 
            text="Transform Your Business With Next-Gen Solutions"
            className="text-5xl md:text-6xl font-bold mb-6"
          />
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Innovative software solutions that drive growth and efficiency for businesses of all sizes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Magnetic>
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold transition-all duration-300 shadow-lg shadow-amber-500/25">
                Get Started
              </button>
            </Magnetic>
            
            <Magnetic>
              <button className="px-6 py-3 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10 text-white font-semibold hover:border-amber-500/50 transition-all duration-300">
                Learn More
              </button>
            </Magnetic>
          </div>
        </div>
      </section>
      
      {/* ... rest of your content ... */}
    </main>
  )
} 