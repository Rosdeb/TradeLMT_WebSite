import { HeroSection } from '@/components/hero-section'
import { Header } from '@/components/header'
import { BrokerSection } from '@/components/broker-section'
import { FeaturesSection } from '@/components/features-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { FAQSection } from '@/components/faq-section'
import { FooterSection } from '@/components/footer-section'

export default function Home() {
  return (
    <>
      <Header/>
      <main className="bg-background text-foreground overflow-hidden pt-20">
        <HeroSection />
        <BrokerSection />
        <FeaturesSection />
        <HowItWorksSection />
        <FAQSection />
        <FooterSection />
      </main>
    </>
  )
}
