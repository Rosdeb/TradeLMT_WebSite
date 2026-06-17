'use client'

export function BrokerSection() {
  const brokers = [
    { name: 'TD Ameritrade', icon: '🏦' },
    { name: 'Interactive Brokers', icon: '📊' },
    { name: 'ThinkorSwim', icon: '💹' },
    { name: 'TradeStation', icon: '⚡' },
    { name: 'Tradeovate', icon: '🎯' },
    { name: 'Tastyworks', icon: '🍴' },
    { name: 'Lightspeed', icon: '⚙️' },
    { name: 'Centerpoint', icon: '🔄' },
  ]

  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Integrated with{' '}
            <span className="text-accent">Leading Brokers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trade across your favorite platforms seamlessly. We support all major brokers with zero configuration required.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {brokers.map((broker) => (
            <div
              key={broker.name}
              className="flex flex-col items-center justify-center p-6 rounded-lg border border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-3">{broker.icon}</div>
              <p className="font-semibold text-center text-sm">{broker.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-border/50">
          <h3 className="text-2xl font-bold mb-3">Your Broker Isn&apos;t Listed?</h3>
          <p className="text-muted-foreground mb-4">
            We&apos;re constantly adding new broker integrations. Check back soon or contact us to request your broker.
          </p>
          <a href="#" className="text-accent hover:text-accent/80 font-semibold">
            Request Integration →
          </a>
        </div>
      </div>
    </section>
  )
}
