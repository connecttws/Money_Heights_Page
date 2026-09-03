"use client";
import Hero from '@/components/Hero';
import Eligibility from '@/components/Eligibility';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FormSection from '@/components/FormSection';

export default function Home() {
  const scrollToForm = () => {
    const formElement = document.getElementById('apply-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <header style={{ 
        position: 'sticky', top: 0, zIndex: 100, 
        padding: '16px 0', 
        borderBottom: '1px solid var(--card-border)', 
        backgroundColor: 'rgba(255, 255, 255, 0.85)', 
        backdropFilter: 'blur(16px)', 
        WebkitBackdropFilter: 'blur(16px)' 
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="header-logo">
            Moneyy<span style={{ color: 'var(--accent)' }}>Height</span>
          </div>
          <button className="btn-primary header-btn" onClick={scrollToForm}>
            Apply Now
          </button>
        </div>
      </header>

      <Hero onOpenModal={scrollToForm} />
      <FormSection />
      <Eligibility />
      <Process onOpenModal={scrollToForm} />
      <Testimonials />
      <FAQ />

      <footer style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '60px 0 40px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container">
          <div style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '24px', fontFamily: 'var(--font-heading)', letterSpacing: '-0.5px' }}>
            Moneyy<span style={{ color: 'var(--accent)' }}>Height</span>
          </div>
          <p style={{ color: '#94A3B8', fontSize: '0.95rem', marginBottom: '16px', maxWidth: '400px', margin: '0 auto 24px', lineHeight: '1.6' }}>
            Empowering your financial journey with seamless top-up loans and expert guidance.
          </p>
          <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--accent)', margin: '0 auto 30px' }}></div>
          <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '12px' }}>
            © {new Date().getFullYear()} Moneyy Height. All rights reserved.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', color: '#64748B', fontSize: '0.85rem' }}>
            <span style={{ cursor: 'pointer', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color='white'} onMouseOut={(e) => e.currentTarget.style.color='#64748B'}>Terms & Conditions</span>
            <span>|</span>
            <span style={{ cursor: 'pointer', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color='white'} onMouseOut={(e) => e.currentTarget.style.color='#64748B'}>Privacy Policy</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
