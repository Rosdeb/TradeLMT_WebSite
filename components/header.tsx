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
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Image src="/Screenshot_2026-06-19_145555-removebg-preview.png" alt="TradeLMT" width={100} height={60} />

          {/* <Image
            src="/image_1.png"
            alt="TradeLMT"
            width={200}
            height={100}
            priority
            className="h-10 w-auto"
          /> */}
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-white/60 hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-white/60 hover:text-white transition-colors">How It Works</a>
          <a href="#pricing" className="text-sm text-white/60 hover:text-white transition-colors">Pricing</a>
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
