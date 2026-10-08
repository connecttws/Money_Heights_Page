import type { Metadata } from "next";
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/components/InnerPage.module.css';

export const metadata: Metadata = {
  title: "About Us | MoneyyHeight - Direct Selling Agent (DSA)",
  description: "Helping you explore car loan top-up options. JP BROTHERS CAPITAL MANAGEMENT PRIVATE LIMITED is a Direct Selling Agent (DSA) working with HDFC Bank, ICICI Bank, and Axis Bank.",
};

export default function AboutUsPage() {
  return (
    <div className={styles.pageWrapper}>
      <Header />

      <section className={styles.heroHeader}>
        <div className="container">
          <span className={styles.badge}>Corporate Profile</span>
          <h1 className={styles.title}>About MoneyyHeight</h1>
          <p className={styles.subtitle}>
            Helping You Explore Car Loan Top-Up Options
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.contentCard}>
            <p>
              <strong>JP BROTHERS CAPITAL MANAGEMENT PRIVATE LIMITED</strong> is a <strong>Direct Selling Agent (DSA)</strong> working with banks and NBFCs to assist eligible customers in exploring financial products and related services. <strong>MoneyyHeight</strong> is a brand of <strong>JP BROTHERS CAPITAL MANAGEMENT PRIVATE LIMITED</strong>. Our official relationship/authorization is with <strong>HDFC Bank, ICICI Bank, and Axis Bank</strong>. As a DSA, we can collect customer information and requirements from the open market.
            </p>

            <div className={styles.callout}>
              <p>
                <strong>Relation — Direct Selling Agent (DSA):</strong> We help eligible customers explore <strong>car loan top-up options</strong> for their existing car loans. Our role is to assist customers with the <strong>initial eligibility process</strong>, provide information about the applicable requirements, and guide them through the <strong>documentation and lender-processing stages</strong>.
              </p>
            </div>

            <p>
              Our services are subject to the <strong>eligibility criteria, policies, documentation requirements, and approval procedures</strong> of the respective lender.
            </p>

            <h2>What We Do</h2>
            <p>
              At <strong>MoneyyHeight</strong>, we aim to make the process of exploring a car loan top-up <strong>straightforward and transparent</strong>.
            </p>
            <p>We help eligible customers:</p>
            <ul className={styles.checkList}>
              <li><strong>Understand the basic eligibility requirements</strong> before starting an application.</li>
              <li><strong>Check whether their existing car loan may qualify</strong> based on lender rules.</li>
              <li><strong>Provide clear information about required documentation</strong> to avoid processing delays.</li>
              <li><strong>Understand the key steps involved</strong> in the top-up journey.</li>
              <li><strong>Receive professional guidance</strong> during applicable verification and lender processing stages.</li>
            </ul>
            <p>
              <strong>Please Note:</strong> The <strong>final decision</strong> regarding loan approval, loan amount, interest rate, tenure, fees, and other terms is made exclusively by the <strong>respective lender</strong> based on its policies and assessment.
            </p>

            <h2>Car Loan Top-Up Eligibility</h2>
            <p>
              Our current service is intended for eligible customers who have an <strong>existing car loan with HDFC Bank, ICICI Bank, or Axis Bank</strong>, subject to applicable lender criteria.
            </p>
            <p>Basic eligibility may include:</p>
            <ul className={styles.checkList}>
              <li><strong>Existing car loan</strong> with <strong>HDFC Bank, ICICI Bank, or Axis Bank</strong></li>
              <li><strong>Existing car loan tenure</strong> of at least <strong>1 year (12 months)</strong></li>
              <li><strong>Vehicle age</strong> not more than <strong>7 years old</strong></li>
              <li><strong>Eligible private-use vehicle</strong> (commercial vehicles not eligible)</li>
              <li><strong>Required documentation</strong> available for KYC and income verification</li>
              <li><strong>Applicable lender credit</strong> and repayment history criteria satisfied</li>
            </ul>
            
            <div className={styles.warningBox}>
              <p>
                <strong>Important Notice:</strong> Meeting the basic eligibility criteria <strong>does not guarantee loan approval</strong>. Final eligibility and approval are subject to the respective lender&apos;s policies, assessment, and documentation.
              </p>
            </div>

            <h2>Our Approach</h2>
            <ul>
              <li>
                <strong>Transparent Information:</strong> We aim to provide clear information about eligibility, documentation, applicable charges, and the overall process involved.
              </li>
              <li>
                <strong>Eligibility-Based Assistance:</strong> We first collect relevant details to understand whether a customer may meet the applicable bank criteria.
              </li>
              <li>
                <strong>Process Guidance:</strong> Eligible customers receive step-by-step guidance regarding documentation and bank processing stages.
              </li>
              <li>
                <strong>No Guaranteed Approval:</strong> We <strong>do not guarantee loan approval</strong>, loan amount, interest rate, or any specific loan terms. Final decisions are made solely by the respective lender.
              </li>
            </ul>

            <h2>Fees & Charges</h2>
            <p>
              Interest rates, processing fees, service charges, and other applicable costs may vary depending on the <strong>respective lender, loan product, and applicant profile</strong>.
            </p>
            <p>
              Applicable <strong>rates, fees, charges, loan amount, tenure</strong>, and other relevant terms will be communicated as applicable before proceeding.
            </p>
            <p>
              <strong>Final charges and loan terms</strong> are subject to the respective lender&apos;s policies, assessment, and applicable terms.
            </p>

            <h2>Our Commitment</h2>
            <p>
              At <strong>MoneyyHeight</strong>, we believe customers should have access to <strong>clear and relevant information</strong> before proceeding with a financial service.
            </p>
            <p>
              We aim to maintain <strong>complete transparency</strong> throughout the eligibility and documentation process, and help customers understand that the <strong>final loan decision rests with the respective lender</strong>.
            </p>

            <h2>About Our Company</h2>
            <div className={styles.contactGrid} style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginBottom: '24px' }}>
              <div className={styles.contactCard} style={{ textAlign: 'left' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 700 }}>Legal Company Name</p>
                <h3 style={{ fontSize: '1.1rem', margin: '4px 0 12px', color: 'var(--primary)' }}>JP BROTHERS CAPITAL MANAGEMENT PRIVATE LIMITED</h3>
                
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 700 }}>Operating Brand</p>
                <h3 style={{ fontSize: '1.1rem', margin: '4px 0 0', color: 'var(--accent)' }}>MoneyyHeight</h3>
              </div>

              <div className={styles.contactCard} style={{ textAlign: 'left' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 700 }}>Registered Business Address</p>
                <p style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.98rem', margin: '4px 0 12px', lineHeight: '1.5' }}>
                  B-124, 3RD FLOOR SECTOR 6 NOIDA GAUTAM BUDDHA UTTAR PRADESH 201301
                </p>
                
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 700 }}>Direct Contact</p>
                <p style={{ margin: '4px 0 0', fontSize: '0.95rem' }}>
                  Phone: <a href="tel:7011797201" style={{ color: 'var(--primary)', fontWeight: 700 }}>+91 7011797201</a><br />
                  Email: <a href="mailto:jpbrothers1198@gmail.com" style={{ color: 'var(--primary)', fontWeight: 700 }}>jpbrothers1198@gmail.com</a>
                </p>
              </div>
            </div>

            <h2>Important Disclaimer</h2>
            <div className={styles.callout}>
              <p>
                <strong>MoneyyHeight</strong> is a brand of <strong>JP BROTHERS CAPITAL MANAGEMENT PRIVATE LIMITED</strong> and is <strong>not itself the final decision-maker</strong> for loan approval.
              </p>
              <p style={{ marginTop: '10px' }}>
                Car loan top-up availability, eligibility, loan amount, interest rate, tenure, fees, documentation requirements, and final approval are subject to the respective lender&apos;s policies, credit assessment, and applicable terms.
              </p>
              <p style={{ marginTop: '10px', fontWeight: 700, color: 'var(--primary)' }}>
                Submitting an enquiry or eligibility form does not guarantee loan approval or disbursement.
              </p>
            </div>

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
