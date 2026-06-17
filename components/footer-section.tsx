'use client'

export function FooterSection() {
  return (
    <footer className="bg-card/50 border-t border-border/50 py-20 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">TradLMT</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional trading platform for futures traders. Low latency, multi-broker support, and advanced analytics.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Download
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Updates
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 TradeLMT. All rights reserved. | Professional trading platform for futures traders.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Compliance
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div>
              <p className="text-xs text-muted-foreground mb-3">Download for Desktop</p>
              <div className="flex gap-3">
                <button className="px-5 py-2 rounded-md border border-white/10 text-white/80 hover:text-white hover:border-white/30 transition">
                  Windows
                </button>

                <button className="px-5 py-2 rounded-md border border-white/10 text-white/80 hover:text-white hover:border-white/30 transition">
                  macOS
                </button>

                <button className="px-5 py-2 rounded-md border border-white/10 text-white/80 hover:text-white hover:border-white/30 transition">
                  Linux
                </button>
              </div>
            </div>

            <div className="h-12 w-px bg-border/50 hidden sm:block" />

            <div>
              <p className="text-xs text-muted-foreground mb-3">Follow Us</p>
              <div className="flex gap-3">
                {['Twitter', 'Discord', 'GitHub'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:border-accent/50 hover:bg-accent/5 transition-colors text-sm"
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
