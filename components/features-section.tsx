'use client'

export function FeaturesSection() {
  const features = [
    {
      icon: '⚡',
      title: 'Ultra-Low Latency',
      description: 'Sub-millisecond order execution. Get your trades in first with our optimized infrastructure.',
    },
    {
      icon: '🎯',
      title: 'Risk Management',
      description: 'Advanced position sizing and stop-loss tools to protect your capital and maximize gains.',
    },
    {
      icon: '📊',
      description: 'Real-time analytics and detailed trade journals to track performance and improve strategy.',
      title: 'Advanced Analytics',
    },
    {
      icon: '🔐',
      title: 'Bank-Level Security',
      description: 'Your accounts and funds are protected with enterprise-grade security and encryption.',
    },
    {
      icon: '📱',
      title: 'Multi-Device Sync',
      description: 'Trade seamlessly across desktop, tablet, and mobile. Your settings sync instantly.',
    },
    {
      icon: '🚀',
      title: 'Lightning-Fast Platform',
      description: 'Built for speed. Optimized performance means more time trading and less time waiting.',
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to{' '}
            <span className="text-accent">Trade Like a Pro</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Packed with powerful features designed for serious traders. From risk management to advanced analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border/50 bg-card/50 hover:bg-card hover:border-accent/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
