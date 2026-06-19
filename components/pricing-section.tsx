'use client'

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'Single API',
    price: '$9.99',
    description: 'For disciplined traders using one broker or API connection.',
    badge: 'Starter',
    features: [
      '1 broker/API connection',
      'Daily trade limit enforcement',
      'Daily loss limit lock',
      'Timed blocks from 2 to 24 hours',
      'Block specific trading dates',
      'Desktop app access',
    ],
  },
  {
    name: 'Multiple API',
    price: '$14.99',
    description: 'For traders who need TradeLMT protection across multiple connections.',
    badge: 'Most popular',
    featured: true,
    features: [
      'Multiple broker/API connections',
      'All Single API features',
      'Rules synced across accounts',
      'Priority setup support',
      'Trade journal and alerts',
      'Best for active multi-account traders',
    ],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 bg-black">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple Plans for Safer Trading
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Choose the membership that matches how many broker or API connections you want TradeLMT.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-7 md:p-8 ${
                plan.featured
                  ? 'border-green-400/50 bg-green-400/[0.06] shadow-2xl shadow-green-500/10'
                  : 'border-white/10 bg-white/[0.03]'
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-8">
                <div>
                  <div className="inline-flex rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-white/70 mb-4">
                    {plan.badge}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{plan.description}</p>
                </div>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                <span className="ml-2 text-white/45">/ month</span>
              </div>

              <Button
                size="lg"
                className={`mb-8 w-full py-6 text-base font-bold ${
                  plan.featured
                    ? 'bg-green-500 text-black hover:bg-green-600'
                    : 'bg-white text-black hover:bg-white/90'
                }`}
              >
                Start Membership
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm text-white/70">
                    <Check size={17} className="shrink-0 text-green-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/40">
          Paid membership is subject to the TradeLMT Terms of Service and Privacy Policy.
        </p>
      </div>
    </section>
  )
}
