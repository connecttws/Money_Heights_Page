"use client";
import Link from 'next/link';

export default function ThankYou() {
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
          <Link href="/" className="header-logo" style={{ textDecoration: 'none' }}>
            Moneyy<span style={{ color: 'var(--accent)' }}>Height</span>
          </Link>
          <Link href="/" className="btn-primary header-btn" style={{ textDecoration: 'none' }}>
            Visit Website
          </Link>
        </div>
      </header>

      <section className="section" style={{ minHeight: 'calc(100vh - 200px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <div className="glass-card animate-fade-in-up" style={{ padding: '50px 40px', textAlign: 'center' }}>
            
            {/* Success Icon */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
              <div style={{ width: '90px', height: '90px', borderRadius: '50%', backgroundColor: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-glow)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
            </div>

            <h1 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '16px', letterSpacing: '-0.5px' }}>
              Your Enquiry Has Been Received Successfully
            </h1>
            
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: '1.6' }}>
              Thank you for your interest in a Car Loan Top-Up with MoneyyHeight. 
              Our team has received your details and will contact you shortly to understand your requirements and discuss your eligibility.
            </p>

            <div style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '16px', padding: '30px', textAlign: 'left', marginBottom: '40px', border: '1px solid rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '24px', borderBottom: '1px solid var(--card-border)', paddingBottom: '12px' }}>
                What Happens Next?
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '1.8rem', marginTop: '-4px' }}>📞</div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '6px' }}>Our team will contact you</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>We’ll speak with you about your existing car loan and Top-Up requirements.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '1.8rem', marginTop: '-4px' }}>🔍</div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '6px' }}>Eligibility Discussion</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>Our team will guide you through the eligibility and required documents.</p>
                  </div>
                </div>
              </div>
              
              <div style={{ marginTop: '30px', padding: '16px', backgroundColor: 'var(--accent-light)', borderRadius: '10px', color: 'var(--accent-hover)', fontWeight: '600', textAlign: 'center', fontSize: '1.05rem' }}>
                Please keep your phone available for our call.
              </div>
            </div>

            <Link href="/" className="btn-primary" style={{ textDecoration: 'none', padding: '16px 40px', fontSize: '1.15rem' }}>
              Visit Website
            </Link>

          </div>
        </div>
      </section>

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
