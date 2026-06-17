'use client'

import { useState } from 'react'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Which brokers do you support?',
      answer:
        'We currently support TD Ameritrade, Interactive Brokers, ThinkorSwim, TradeStation, Tradeovate, Tastyworks, Lightspeed, and Centerpoint. We&apos;re constantly adding new brokers based on community requests.',
    },
    {
      question: 'Is there a monthly subscription fee?',
      answer:
        'No hidden fees. We offer both free and premium tiers. The free tier includes all essential trading features. Premium features are optional.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Yes. We use bank-level encryption and never store your broker credentials. Your data is yours alone, and we follow strict GDPR and compliance standards.',
    },
    {
      question: 'Can I use this on multiple devices?',
      answer:
        'Absolutely! Your settings sync across all your devices. Trade on desktop, check positions on mobile. Full synchronization across platforms.',
    },
    {
      question: 'What are the system requirements?',
      answer:
        'The desktop app works on Windows 10+, macOS 10.13+, and Linux (Ubuntu 16.04+). For web access, any modern browser works perfectly.',
    },
    {
      question: 'Do you offer customer support?',
      answer:
        'Yes! We provide 24/5 email support and live chat. Our support team of traders will help you get the most out of the platform.',
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked{' '}
            <span className="text-accent">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Intuitive Flow
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border/50 rounded-lg overflow-hidden bg-card/50 hover:border-accent/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-card transition-colors"
              >
                <h3 className="font-semibold text-lg text-left">{faq.question}</h3>
                <div className={`text-2xl text-accent transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 border-t border-border/50 bg-background/50">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-border/50 text-center">
          <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Can&apos;t find what you&apos;re looking for? Reach out to our support team.
          </p>
          <a href="#contact" className="text-accent hover:text-accent/80 font-semibold">
            Contact Support →
          </a>
        </div>
      </div>
    </section>
  )
}
