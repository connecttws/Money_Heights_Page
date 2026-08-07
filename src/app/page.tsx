"use client";
import { useState } from 'react';
import Hero from '@/components/Hero';
import VSLSection from '@/components/VSLSection';
import Eligibility from '@/components/Eligibility';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FormModal from '@/components/FormModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main>
      <header style={{ padding: '20px', borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--card-bg)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>
            Money<span style={{ color: 'var(--accent)' }}>Heights</span>
          </div>
          <button className="btn-primary" onClick={openModal} style={{ padding: '10px 24px', fontSize: '0.95rem' }}>
            Apply Now
          </button>
        </div>
      </header>

      <Hero onOpenModal={openModal} />
      <VSLSection />
      <Eligibility />
      <Process onOpenModal={openModal} />
      <Testimonials />
      <FAQ />
      
      <FormModal isOpen={isModalOpen} onClose={closeModal} />

      <footer style={{ backgroundColor: '#0F172A', color: 'white', padding: '40px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>
            Money<span style={{ color: 'var(--accent)' }}>Heights</span>
          </div>
          <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '10px' }}>
            © {new Date().getFullYear()} Money Heights. All rights reserved.
          </p>
          <p style={{ color: '#64748B', fontSize: '0.8rem' }}>
            Terms & Conditions | Privacy Policy
          </p>
        </div>
      </footer>
    </main>
  );
}
