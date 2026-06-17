import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { BrokerSection } from '@/components/broker-section'
import { ComparisonSection } from '@/components/comparison-section'
import { FAQSection } from '@/components/faq-section'
import { FooterSection } from '@/components/footer-section'

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#0a0a0a] text-foreground overflow-hidden">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <BrokerSection />
        <ComparisonSection />
    
        <FAQSection />
        <FooterSection />
      </main>
    </>
  )
}
