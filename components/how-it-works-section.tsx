'use client'

import { Shield, Clock, Ban, CalendarX } from 'lucide-react'

const steps = [
  {
    icon: Shield,
    number: '01',
    title: 'Set Your Daily Trade Limit',
    description:
      'Define how many trades you can execute per day. Once reached, platform automatically locks trading.',
    example: 'Example: 5 trades → platform lock',
  },
  {
    icon: Clock,
    number: '02',
    title: 'Choose Block Duration',
    description:
      'Select how long trading stays blocked after limit is reached.',
    example: 'Block for 4, 8, 12, or 24 hours',
  },
  {
    icon: Ban,
    number: '03',
    title: 'Platform Gets Locked',
    description:
      'Once limit is hit, trading access is blocked automatically with no override.',
    example: 'Zerodha / Upstox / Angel One → blocked',
  },
  {
    icon: CalendarX,
    number: '04',
    title: 'Schedule Block Days',
    description:
      'Pre-set with no-trade day, or don\'n feel like trading today beacuse it may be bad, lock your self out?',
    example: 'Every Thursday & Custom dates',
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-14 px-4 bg-black">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
           Your Trading Rules. Enforced Automatically.
          </h2>

          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Set your trading rules once. The system handles discipline for you.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 flex gap-6"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-white/5 text-green-400 flex items-center justify-center flex-shrink-0">
                  <Icon size={22} />
                </div>

                {/* Content */}
                <div>
                  <span className="text-xs text-green-400 font-semibold">
                    STEP {step.number}
                  </span>

                  <h3 className="text-xl font-bold text-white mt-1 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-white/60 mb-3">
                    {step.description}
                  </p>

                  <div className="text-sm text-white/50">
                    {step.example}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
      

      </div>
    </section>
  )
}
