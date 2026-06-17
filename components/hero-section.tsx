'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

const stats = [
  { value: '10,000+', label: 'Active Traders' },
  { value: '5+', label: 'Brokers Supported' },
  { value: '99.9%', label: 'Uptime' },
  { value: '₹0', label: 'Hidden Fees' },
]

const badges = ['Zerodha', 'Angel One', 'Upstox', 'Fyers', 'Dhan']

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-24 overflow-hidden">
      <Image src="/Depository-Participant-Charge-What-Are-DP-Charges-And-Why-Do-They-Matter.webp" alt="Trading" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-green-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
    
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] text-white tracking-tight">
          Stop Overtrading.<br />
          <span className="text-green-400">Trade With Discipline.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/65 mb-4 max-w-2xl mx-auto leading-relaxed">
          Set daily trade limits & loss limits. When you hit your limit, TradeLMT automatically
          locks your broker platform — no overrides, no revenge trading.
        </p>

        <p className="text-base text-green-400/80 font-medium mb-10">
          Block for 2 · 4 · 8 · 12 · 24 hours — or schedule entire dates.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-black font-bold px-10 text-base shadow-xl shadow-green-500/30">
            Download Free App
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-base">
            See How It Works
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-black/50 px-6 py-5 text-center backdrop-blur-sm">
              <div className="text-2xl font-bold text-white">{value}</div>
              <div className="text-xs text-white/45 mt-1">{label}</div>
            </div>
          ))}
        </div>
      
      </div>
    </section>
  )
}
