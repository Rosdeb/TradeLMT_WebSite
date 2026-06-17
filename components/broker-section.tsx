'use client'

import Image from 'next/image'

const brokers = [
  {
    name: 'ThinkOrSwim / Schwab',
    logo: 'https://play-lh.googleusercontent.com/GuDYnpP_SjyHhqSSh4pqtcCltMu-hHZdjnS1ZegBzp2EqCb9KMKFvbpn-K41CaSO9voFs1goDn10Zju4_IDgV9U',
  },
  {
    name: 'Interactive Brokers (IBKR)',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpG_NVDaBiUTcyquqDTVbaJRTmSa5ncFL3sw&s',
  },
  {
    name: 'Binance',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Binance_Logo.png',
  },
  {
    name :"Tradovate",
    logo:"https://play-lh.googleusercontent.com/JXKzB18F4sn2juqCJJTGZ-RrRxRe0iV-L3bUX8BmP5ZeDFUybMS5pvt35a7Fo0n_oeXD  "
  },
  {
   name : "TastyTrade",
   logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJBnk-1o37EfPtKlkjO5P7y4rMUwUzdwssmw&s"
  },
  {
    name :"Liquid/Quoine",
    logo: "https://iq.wiki/cdn-cgi/image/width=1920,quality=70/https://ipfs.everipedia.org/ipfs/QmSuaMXbUmc6JeaTHHHTEsswSPDyJEGT8MXVQDHEdfwPZK"
  }
 ]

export function BrokerSection() {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Your Broker. <span className="text-green-400">Your Choice.</span>
        </h2>

        <p className="text-lg text-white/60 max-w-xl mx-auto mb-14">
          Connect your broker once. Trade limits and risk rules are enforced automatically.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mb-12">
          {brokers.map((broker) => (
            <div
              key={broker.name}
              className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-green-500/30 transition-all"
            >
              <div className="w-12 h-12 relative">
                <Image
                  src={broker.logo}
                  alt={broker.name}
                  fill
                  className="object-contain"
                />
              </div>

              <span className="text-sm font-medium text-white/80 text-center">
                {broker.name}
              </span>
            </div>
          ))}
        </div>

        {/* Footer note */}
       
      </div>
    </section>
  )
}