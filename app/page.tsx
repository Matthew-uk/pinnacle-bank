import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Testimonials } from '@/components/Testimonials';
import { AppPromotion } from '@/components/AppPromotion';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { Statistics } from '@/components/Statistics';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-montserrat">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Statistics />
        <Testimonials />
        <AppPromotion />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
