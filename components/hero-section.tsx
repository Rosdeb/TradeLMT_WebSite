'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">

      <Image
        src="/Depository-Participant-Charge-What-Are-DP-Charges-And-Why-Do-They-Matter.webp"
        alt="Trading Background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          {/* <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
            <span className="text-sm font-medium text-accent">Trade Smarter, Not Harder</span>
          </div> */}

          <h1 className="text-4xl md:text-3xl font-bold mb-6 leading-tight text-white">
            Set Trade Limits. Prevent Overtrading.
            <br />
            Stay Disciplined.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Built for Futures and Options traders. Connect your broker,
            enforce daily trade limits, set loss limits, and automatically
            lock your platform when your rules are reached.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-green-600 text-white hover:bg-green-700">
              Download Desktop App
            </Button>
            <Button size="lg" variant="outline" className="border-accent/50 hover:bg-accent/10">
              See How It Works
            </Button>
          </div>

          {/* <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">Trusted by professional traders</p>
            <div className="flex flex-wrap gap-6">
              {['Award Winning', 'Low Latency', 'Multi-Broker'].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div> */}
        </div>

        {/* Hero Image */}
        {/* <div className="relative hidden lg:block">
          <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/pngtree-stock-analysis-trading-software-image_17227918.jpg"
              alt="Trading Background"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div> */}
      </div>
    </section>
  )
}
