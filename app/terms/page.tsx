import Link from 'next/link'

export const metadata = { title: 'Terms of Service – TradeLMT' }

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-green-400 hover:text-green-300 text-sm mb-8 inline-block">← Back to Home</Link>

        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-white/40 text-sm mb-10">Last updated: June 2026</p>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>By downloading, installing, or using TradeLMT, you agree to these Terms of Service. If you do not agree, do not use the software.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Description of Service</h2>
            <p>TradeLMT is a desktop application that enforces self-imposed trading rules — including daily trade limits, loss limits, timed blocks, and date-based restrictions. TradeLMT is a discipline tool, not a financial advisor or broker.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. No Financial Advice</h2>
            <p>Nothing in TradeLMT constitutes financial, investment, or trading advice. All trading decisions are solely your responsibility. Trading in Futures & Options involves substantial risk of loss.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. User Responsibilities</h2>
            <p>You are responsible for configuring your own trade limits appropriately. TradeLMT enforces the rules you set — we are not liable for trading losses incurred before, during, or after a block period.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Prohibited Use</h2>
            <p>You may not reverse-engineer, decompile, or attempt to bypass the blocking mechanisms of TradeLMT. The software is licensed for personal use only and may not be resold or redistributed.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Limitation of Liability</h2>
            <p>TradeLMT is provided "as is." We are not liable for any trading losses, missed trades, or damages arising from the use or inability to use the software. Our total liability shall not exceed the amount paid for the service in the preceding 12 months.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Changes to Terms</h2>
            <p>We may update these terms at any time. Continued use of TradeLMT after changes constitutes acceptance of the new terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Contact</h2>
            <p>For any questions about these terms, contact <a href="mailto:support@tradelmt.com" className="text-green-400">support@tradelmt.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
