'use client'

export function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Download the App',
      description: 'Get our desktop application. It&apos;s free and works on Windows, Mac, and Linux.',
    },
    {
      number: '02',
      title: 'Connect Your Broker',
      description: 'Link your trading account from any supported broker in seconds. Your data stays secure.',
    },
    {
      number: '03',
      title: 'Configure Settings',
      description: 'Set your trading preferences, risk parameters, and notifications. Everything is customizable.',
    },
    {
      number: '04',
      title: 'Start Trading',
      description: 'Execute trades with confidence using our powerful yet intuitive trading interface.',
    },
  ]

  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Started in{' '}
            <span className="text-accent">Just 4 Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From download to first trade in minutes. It&apos;s that simple.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground font-bold text-xl">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-lg">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-24 w-1 h-20 bg-gradient-to-b from-accent to-transparent" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-lg bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-border/50 text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to trade?</h3>
          <p className="text-muted-foreground mb-6">
            Join thousands of traders who trust Intuitive Flow to execute their strategies.
          </p>
          <button className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors">
            Download Now
          </button>
        </div>
      </div>
    </section>
  )
}
