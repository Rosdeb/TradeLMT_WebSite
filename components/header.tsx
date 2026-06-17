'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { ChevronDown, Monitor, Apple } from 'lucide-react'

export function Header() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/image.png" alt="TradeLMT" width={36} height={36} className="rounded-full" />
          <span className="text-xl font-bold text-white">TradeLMT</span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-white/60 hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-white/60 hover:text-white transition-colors">How It Works</a>
          <a href="#faq" className="text-sm text-white/60 hover:text-white transition-colors">FAQ</a>
        </nav>

        {/* Split Download Button */}
        <div className="relative flex" ref={ref}>
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-black text-sm font-semibold rounded-l-lg transition-colors"
          >
            <Monitor size={15} />
            Download for Windows
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="px-2 py-2 bg-green-500 hover:bg-green-600 text-black border-l border-black/20 rounded-r-lg transition-colors"
          >
            <ChevronDown size={15} className={`transition-transform duration-150 ${open ? 'rotate-180' : ''}`} />
          </button>

          {open && (
            <div className="absolute right-0 top-full mt-2 w-48 rounded-xl bg-[#111] border border-white/10 shadow-xl overflow-hidden">
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm text-white/80 hover:bg-white/8 transition-colors">
                <Monitor size={15} className="text-blue-400" />
                Windows (.exe)
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm text-white/80 hover:bg-white/8 transition-colors">
                <Apple size={15} className="text-white/60" />
                macOS (.dmg)
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
