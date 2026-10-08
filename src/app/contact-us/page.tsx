import type { Metadata } from "next";
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/components/InnerPage.module.css';

export const metadata: Metadata = {
  title: "Contact Us | MoneyyHeight",
  description: "Get in touch with MoneyyHeight. We help you understand car loan top-up eligibility, requirements, and next steps.",
};

export default function ContactUsPage() {
  return (
    <div className={styles.pageWrapper}>
      <Header />

      <section className={styles.heroHeader}>
        <div className="container">
          <span className={styles.badge}>Get In Touch</span>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            We&apos;re Here to Help
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.contentCard}>
            <p style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: 700, lineHeight: 1.5 }}>
              Have a question about car loan top-up eligibility or the process?
            </p>
            <p>
              Get in touch with our team. We can help you understand the <strong>basic eligibility requirements</strong>, <strong>required information</strong>, and the <strong>next steps involved</strong> in exploring available car loan top-up options.
            </p>

            <h2>How Can We Help?</h2>
            <p>You can contact our loan specialists regarding:</p>
            <ul className={styles.checkList}>
              <li><strong>Car loan top-up eligibility</strong> and preliminary assessment</li>
              <li><strong>Existing car loan requirements</strong> (tenure, EMI repayment history)</li>
              <li><strong>Vehicle eligibility</strong> (manufacturing year, private use criteria)</li>
              <li><strong>Required documentation</strong> (RC copy, KYC, income and bank statements)</li>
              <li><strong>Application and verification process</strong> with partner banks</li>
              <li><strong>General questions</strong> about our facilitation services</li>
            </ul>

            <div className={styles.callout} style={{ textAlign: 'center', backgroundColor: '#f0fdf4', borderColor: '#86efac' }}>
              <p style={{ marginBottom: '14px', fontSize: '1.1rem', fontWeight: 700, color: '#166534' }}>
                ⚡ For a faster eligibility check, you can also submit your details through our online form:
              </p>
              <Link href="/#apply-form" className="btn-primary" style={{ padding: '14px 34px', fontSize: '1.05rem' }}>
                Check Your Eligibility Online
              </Link>
            </div>

            <h2>Before You Contact Us</h2>
            <div className={styles.warningBox}>
              <p>
                <strong>Important Notice:</strong> Submitting an enquiry or contacting <strong>MoneyyHeight does not guarantee loan approval</strong>.
              </p>
              <p style={{ marginTop: '8px' }}>
                Loan availability, eligibility, loan amount, interest rate, tenure, fees, documentation requirements, and final approval are <strong>subject to the respective lender&apos;s policies, credit assessment, and applicable terms</strong>.
              </p>
            </div>

            <h2>Company Information</h2>
            <div className={styles.contactGrid} style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginBottom: '28px' }}>
              <div className={styles.contactCard} style={{ textAlign: 'left' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 700 }}>Legal Company Name</p>
                <h3 style={{ fontSize: '1.1rem', margin: '4px 0 14px', color: 'var(--primary)' }}>JP BROTHERS CAPITAL MANAGEMENT PRIVATE LIMITED</h3>
                
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 700 }}>Brand Name</p>
                <h3 style={{ fontSize: '1.1rem', margin: '4px 0 0', color: 'var(--accent)' }}>MoneyyHeight</h3>
              </div>

              <div className={styles.contactCard} style={{ textAlign: 'left' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 700 }}>Business Address</p>
                <p style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.98rem', margin: '4px 0 14px', lineHeight: '1.5' }}>
                  B-124, 3RD FLOOR SECTOR 6 NOIDA GAUTAM BUDDHA UTTAR PRADESH 201301
                </p>
                
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 700 }}>Direct Contact Channels</p>
                <p style={{ margin: '4px 0 0', fontSize: '0.95rem' }}>
                  Phone: <a href="tel:7011797201" style={{ color: 'var(--primary)', fontWeight: 700 }}>+91 7011797201</a><br />
                  Email: <a href="mailto:jpbrothers1198@gmail.com" style={{ color: 'var(--primary)', fontWeight: 700 }}>jpbrothers1198@gmail.com</a>
                </p>
              </div>
            </div>

            <h2>Important Disclaimer</h2>
            <p>
              <strong>MoneyyHeight</strong> is a brand of <strong>JP BROTHERS CAPITAL MANAGEMENT PRIVATE LIMITED</strong>.
            </p>
            <p>
              MoneyyHeight assists eligible customers in exploring car loan top-up options. We <strong>do not guarantee loan approval, a specific loan amount, interest rate, or other loan terms</strong>.
            </p>
            <p>
              <strong>Final eligibility, approval, loan amount, interest rate, tenure, fees, and other applicable terms</strong> are subject to the respective lender&apos;s policies, assessment, documentation, and applicable terms.
            </p>

            <div className={styles.ctaBox}>
              <Link href="/#apply-form" className="btn-primary">
                Check Your Eligibility
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
