'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

const faqs = [
  {
    question: 'How does the trade limit work?',
    answer:
      'You set a daily trade limit. Once reached, trading is automatically blocked for your selected duration.',
  },
  {
    question: 'Can I override the block once it is active?',
    answer:
      'No. The block is enforced to prevent overtrading until the timer expires.',
  },
  {
    question: 'Which brokers are supported?',
    answer:
      'Zerodha, Angel One, Upstox, Fyers, Dhan, Groww, 5paisa, and ICICI Direct.',
  },
  {
    question: 'Can I block specific dates?',
    answer:
      'Yes. You can schedule no-trade days like expiry days or custom dates.',
  },
  {
    question: 'Does it work on mobile?',
    answer:
      'Desktop app enforces blocking. Mobile support is planned.',
  },
  {
    question: 'Is TradeLMT free?',
    answer:
      'Yes. Core features are free. Advanced features are in Pro plan.',
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-14 px-4 bg-black">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-white/60">
            Everything you need to know about TradeLMT.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-5 py-4 flex items-center justify-between text-left"
              >
                <span className="font-medium text-white">
                  {faq.question}
                </span>

                <Plus
                  size={18}
                  className={`text-white/60 transition-transform ${
                    open === i ? 'rotate-45' : ''
                  }`}
                />
              </button>

              {open === i && (
                <div className="px-5 pb-4">
                  <p className="text-white/60 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer CTA */}
      
      </div>
    </section>
  )
}
