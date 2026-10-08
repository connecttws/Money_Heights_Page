"use client";
import Script from 'next/script';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FormSection from '@/components/FormSection';
import Eligibility from '@/components/Eligibility';
import Process from '@/components/Process';
import WhyChoose from '@/components/WhyChoose';
import AboutSection from '@/components/AboutSection';
import FeesCharges from '@/components/FeesCharges';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  const scrollToForm = () => {
    const formElement = document.getElementById('apply-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      {/* Event snippet for Page view conversion page */}
      <Script id="gtag-conversion-main" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('event', 'conversion', {
              'send_to': 'AW-18371984960/diLgCKjE_PIcEMD8uLhE',
              'value': 1.0,
              'currency': 'INR'
          });
        `}
      </Script>

      <Header />
      <Hero onOpenModal={scrollToForm} />
      <FormSection />
      <Eligibility />
      <Process onOpenModal={scrollToForm} />
      <WhyChoose />
      <AboutSection />
      <FeesCharges />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
