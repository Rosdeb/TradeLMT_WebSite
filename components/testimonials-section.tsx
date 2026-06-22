'use client'

const testimonials = [
  {
    quote: 'I used to blow up every Friday on weekly expiry. TradeLMT just locks me out after 5 trades. Best thing I ever did for my P&L.',
    name: 'Rahul S.',
    role: 'Futures or Options Trader · Pune',
    initials: 'RS',
    color: 'bg-green-500/20 text-green-400',
  },
  {
    quote: 'The timed block is brutal in the best way. I hit my loss limit, app locks for 8 hours. No revenge trading, no more blowing accounts.',
    name: 'Priya M.',
    role: 'Risk Manager · Mumbai',
    initials: 'PM',
    color: 'bg-blue-500/20 text-blue-400',
  },
  {
    quote: 'I blocked every Thursday expiry for a month. My monthly P&L went positive for the first time in a year.',
    name: 'Arjun K.',
    role: 'Bangalore',
    initials: 'AK',
    color: 'bg-yellow-500/20 text-yellow-400',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-14 px-4 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
            <span className="text-sm font-medium text-green-400">Trader Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Traders. <span className="text-green-400">Real Discipline.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, role, initials, color }) => (
            <div key={name} className="p-6 rounded-2xl bg-white/4 border border-white/10 hover:border-green-500/20 transition-colors flex flex-col gap-4">
              <p className="text-white/70 text-sm leading-relaxed flex-1">&ldquo;{quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${color}`}>{initials}</div>
                <div>
                  <div className="text-white font-semibold text-sm">{name}</div>
                  <div className="text-white/40 text-xs">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
