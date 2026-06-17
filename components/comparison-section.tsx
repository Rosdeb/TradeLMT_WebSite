'use client'

import { Check, X } from 'lucide-react'

const rows = [
  { feature: 'Hard trade limit (no override)', us: true, them: false },
  { feature: 'Timed broker lock (2–24 hrs)', us: true, them: false },
  { feature: 'Block specific dates / expiry days', us: true, them: false },
  { feature: 'Daily loss limit enforcement', us: true, them: false },
  { feature: 'Free to get started', us: false, them: false },
  { feature: 'No account minimum required', us: true, them: true },
  { feature: 'Desktop + browser blocking', us: true, them: false },
]

export function ComparisonSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            TradeLMT vs Manual Discipline
          </h2>
          <p className="text-white/55 max-w-xl mx-auto">
            Willpower runs out. Rules don't. See why traders choose TradeLMT over relying on self-control.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-white/5 border-b border-white/10">
            <div className="px-6 py-4 text-sm font-semibold text-white/50 uppercase tracking-wider">Feature</div>
            <div className="px-6 py-4 text-center">
              <span className="text-green-400 font-bold text-sm">TradeLMT</span>
            </div>
            <div className="px-6 py-4 text-center">
              <span className="text-white/40 font-semibold text-sm">Manual Willpower</span>
            </div>
          </div>

          {rows.map(({ feature, us, them }, i) => (
            <div key={i} className={`grid grid-cols-3 border-b border-white/5 ${i % 2 === 0 ? 'bg-black/20' : ''} hover:bg-white/3 transition-colors`}>
              <div className="px-6 py-4 text-sm text-white/75">{feature}</div>
              <div className="px-6 py-4 flex justify-center">
                {us
                  ? <Check size={18} className="text-green-400" />
                  : <X size={18} className="text-white/20" />}
              </div>
              <div className="px-6 py-4 flex justify-center">
                {them
                  ? <Check size={18} className="text-white/40" />
                  : <X size={18} className="text-red-400/60" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
