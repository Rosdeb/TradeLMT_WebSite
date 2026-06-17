'use client'

import { Shield, Clock, CalendarX, Ban, Bell, BarChart2 } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Daily Trade Limit',
    description:
      'Set a max number of trades per day. Once reached, your broker platform is automatically locked.',
  },
  {
    icon: Clock,
    title: 'Timed Block',
    description:
      'Choose your lockout duration — 2, 4, 8, 12, or 24 hours. No way to bypass it during the block.',
  },
  {
    icon: Ban,
    title: 'Loss Limit Lock',
    description:
      'Define a max daily loss. Hit the limit and trading is halted for the rest of the day.',
  },
  {
    icon: CalendarX,
    title: 'Block Specific Dates',
    description:
      'Schedule no-trade days in advance for discipline and risk control.',
  },
  {
    icon: Bell,
    title: 'Smart Alerts',
    description:
      'Get notified before you approach your limit so you can manage risk early.',
  },
  {
    icon: BarChart2,
    title: 'Trade Journal',
    description:
      'Auto-log every trade with timestamp and P&L to track discipline over time.',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-14 px-4 bg-black">
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trading Rules That Protect Your Capital
          </h2>

          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Set limits, control risk, and enforce discipline across your trading account.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-green-500/30 transition-all duration-200"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center mb-4">
                <Icon size={20} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
