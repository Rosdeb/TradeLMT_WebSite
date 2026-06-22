import Link from 'next/link'

export const metadata = { title: 'Privacy Policy – TradeLMT' }

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-green-400 hover:text-green-300 text-sm mb-8 inline-block">← Back to Home</Link>

        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-10">Last updated: June 2026</p>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
            <p>TradeLMT collects only the minimum information necessary to operate the service: your email address (for account creation), device information (OS, version), and usage data (trade counts, block events). We do <strong className="text-white">not</strong> store your broker credentials or trading account data on our servers.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Data</h2>
            <p>Your data is used solely to provide and improve TradeLMT features — enforcing trade limits, syncing settings, and sending product updates. We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Broker Integration</h2>
            <p>TradeLMT integrates with your broker via locally-installed desktop software. All broker authentication happens on your device. We never transmit or store your broker login credentials.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Data Retention</h2>
            <p>Your account data is retained for as long as your account is active. You may request deletion at any time by contacting us at <a href="mailto:supportteam@tradelmt.com" className="text-green-400">supportteam@tradelmt.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Security</h2>
            <p>We use industry-standard encryption for data in transit (TLS) and at rest. Access to user data is restricted to authorized personnel only.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Contact</h2>
            <p>For any privacy-related questions, contact us at <a href="mailto:supportteam@tradelmt.com" className="text-green-400">supportteam@tradelmt.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
