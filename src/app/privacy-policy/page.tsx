import type { Metadata } from "next";
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/components/InnerPage.module.css';

export const metadata: Metadata = {
  title: "Privacy Policy | MoneyyHeight",
  description: "Privacy Policy of MoneyyHeight, a brand of JP BROTHERS CAPITAL MANAGEMENT PRIVATE LIMITED. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.pageWrapper}>
      <Header />

      <section className={styles.heroHeader}>
        <div className="container">
          <span className={styles.badge}>Legal & Transparency</span>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.subtitle}>
            Effective Date: October 8, 2026
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.contentCard}>
            <p>
              <strong>MoneyyHeight</strong> is a brand of <strong>JP BROTHERS CAPITAL MANAGEMENT PRIVATE LIMITED</strong>.
            </p>
            <p>
              We respect your privacy and are committed to <strong>protecting the personal information</strong> you provide when you use our website, submit an eligibility form, or contact us regarding car loan top-up options.
            </p>
            <p>
              This Privacy Policy explains <strong>what information we collect</strong>, <strong>how we use it</strong>, <strong>how it may be shared</strong>, and the <strong>choices available to you</strong>.
            </p>

            <h2>1. Information We Collect</h2>
            <p>When you use our website or submit an eligibility form, we may collect information such as:</p>
            
            <h3>Personal Information</h3>
            <ul className={styles.checkList}>
              <li><strong>Full name</strong></li>
              <li><strong>Phone number</strong> (mobile contact)</li>
              <li><strong>Email address</strong></li>
              <li><strong>City or place of residence</strong></li>
            </ul>

            <h3>Vehicle Information</h3>
            <ul className={styles.checkList}>
              <li><strong>Vehicle make/name</strong></li>
              <li><strong>Vehicle manufacturing year</strong></li>
              <li><strong>Private use registration status</strong> (whether the vehicle is for private use)</li>
            </ul>

            <h3>Existing Loan Information</h3>
            <ul className={styles.checkList}>
              <li><strong>Existing car-loan lender/bank</strong> (e.g., HDFC Bank, ICICI Bank, Axis Bank)</li>
              <li><strong>Duration of the existing car loan</strong> (active repayment tenure)</li>
              <li>Other information required to assess applicable eligibility criteria</li>
            </ul>
            <p>
              We may also collect information that you <strong>voluntarily provide</strong> when you contact us or communicate directly with our team.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>We may use the information you provide to:</p>
            <ul className={styles.checkList}>
              <li><strong>Review your eligibility</strong> for available car loan top-up options</li>
              <li><strong>Contact you</strong> regarding your enquiry or eligibility request</li>
              <li><strong>Understand your existing car-loan and vehicle details</strong></li>
              <li><strong>Provide information</strong> about the applicable process and requirements</li>
              <li><strong>Guide you regarding required documentation</strong></li>
              <li><strong>Coordinate the applicable verification or lender-processing process</strong></li>
              <li><strong>Respond to your questions</strong> and service requests</li>
              <li><strong>Improve our website, services, and customer experience</strong></li>
              <li><strong>Comply with applicable legal and regulatory requirements</strong></li>
              <li><strong>Prevent fraud, misuse, or unauthorized activity</strong></li>
            </ul>
            <p>
              We will use your information <strong>strictly for purposes related to the service or enquiry you have requested</strong>.
            </p>

            <h2>3. Sharing of Information</h2>
            <p>
              Where necessary for providing the requested service, your information may be shared with <strong>relevant service providers, representatives, financial institutions, or other parties</strong> involved in the applicable loan eligibility or processing workflow.
            </p>
            <p>
              Information may be shared only where <strong>reasonably required for the requested service, verification, communication, processing, or compliance purposes</strong>.
            </p>
            
            <div className={styles.callout} style={{ backgroundColor: '#ecfdf5', borderColor: '#10b981' }}>
              <p style={{ fontWeight: 700, color: '#065f46', fontSize: '1.05rem' }}>
                🛡️ Zero Data Sale Guarantee: We do not sell your personal information as a product to third parties.
              </p>
            </div>

            <h2>4. Communication</h2>
            <p>
              By submitting an eligibility form or contacting us, you agree that we may contact you regarding your enquiry, eligibility, and related services through available communication channels, including:
            </p>
            <ul>
              <li><strong>Phone calls</strong></li>
              <li><strong>SMS</strong></li>
              <li><strong>Email</strong></li>
            </ul>
            <p>
              You may request that we <strong>stop sending non-essential communications</strong> at any time by contacting us using the details provided below.
            </p>

            <h2>5. Cookies and Website Technologies</h2>
            <p>Our website may use cookies and similar technologies to:</p>
            <ul>
              <li><strong>Maintain website functionality</strong> and secure navigation</li>
              <li><strong>Understand website usage</strong> and visitor preferences</li>
              <li><strong>Improve website performance</strong> and page load speeds</li>
              <li><strong>Measure advertising and marketing performance</strong></li>
              <li><strong>Provide an enhanced, personalized user experience</strong></li>
            </ul>
            <p>
              Third-party services used on our website may also use cookies or similar technologies in accordance with their respective privacy policies. You can manage or disable cookies through your browser settings.
            </p>

            <h2>6. Advertising and Analytics</h2>
            <p>
              We may use third-party advertising and analytics services to understand how visitors interact with our website and to measure the performance of our advertising campaigns.
            </p>
            <p>
              These services may collect information such as browser information, device details, approximate geographic location, pages visited, and on-site interactions.
            </p>
            <div className={styles.warningBox}>
              <p>
                <strong>Notice:</strong> We <strong>do not use these technologies to guarantee loan approval</strong> or determine your eligibility independently of the applicable lender&apos;s assessment.
              </p>
            </div>

            <h2>7. Data Security</h2>
            <p>
              We take <strong>reasonable and appropriate security measures</strong> to protect the personal information we collect against unauthorized access, misuse, alteration, disclosure, or destruction.
            </p>
            <p>
              However, no method of transmitting or storing information online can be guaranteed to be 100% secure.
            </p>

            <h2>8. Data Retention</h2>
            <p>
              We retain personal information <strong>only for as long as reasonably necessary</strong> for the purposes described in this Privacy Policy, including providing requested services, maintaining business records, resolving disputes, and complying with statutory obligations.
            </p>

            <h2>9. Your Choices and Rights</h2>
            <p>Depending on applicable law, you may have the right to:</p>
            <ul className={styles.checkList}>
              <li><strong>Request information</strong> about the personal data we hold about you</li>
              <li><strong>Request correction</strong> of inaccurate or incomplete information</li>
              <li><strong>Request deletion</strong> of information where legally permitted</li>
              <li><strong>Withdraw consent</strong> for certain marketing communications</li>
              <li><strong>Ask questions</strong> about how your information is being used</li>
            </ul>

            <h2>10. Third-Party Websites and Services</h2>
            <p>
              Our website may contain links, videos, forms, or services provided by third parties. We are <strong>not responsible for the privacy practices, content, or security practices</strong> of third-party websites or services.
            </p>

            <h2>11. Children&apos;s Privacy</h2>
            <p>
              Our services are intended <strong>exclusively for adults (18+ years of age)</strong> who are legally eligible to enquire about financial products. We do not knowingly collect personal information from minors.
            </p>

            <h2>12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our services, website, legal requirements, or privacy practices. Any updated version will be published on this page with a revised effective date.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact our team:
            </p>
            <div className={styles.callout}>
              <p>
                <strong>Company:</strong> JP BROTHERS CAPITAL MANAGEMENT PRIVATE LIMITED<br />
                <strong>Brand:</strong> MoneyyHeight<br />
                <strong>Business Address:</strong> B-124, 3RD FLOOR SECTOR 6 NOIDA GAUTAM BUDDHA UTTAR PRADESH 201301<br />
                <strong>Phone:</strong> <a href="tel:7011797201" style={{ color: 'var(--primary)', fontWeight: 700 }}>+91 7011797201</a><br />
                <strong>Email:</strong> <a href="mailto:jpbrothers1198@gmail.com" style={{ color: 'var(--primary)', fontWeight: 700 }}>jpbrothers1198@gmail.com</a>
              </p>
            </div>

            <h2>14. Important Information About Loan Services</h2>
            <div className={styles.warningBox}>
              <p>
                <strong>MoneyyHeight is a brand of JP BROTHERS CAPITAL MANAGEMENT PRIVATE LIMITED.</strong>
              </p>
              <p style={{ marginTop: '8px' }}>
                We assist eligible customers in exploring car loan top-up options based on applicable eligibility requirements. Loan availability, eligibility, loan amount, interest rate, tenure, fees, documentation requirements, and final approval are <strong>subject to the respective lender&apos;s policies, credit assessment, and applicable terms</strong>.
              </p>
              <p style={{ marginTop: '8px', fontWeight: 700 }}>
                Submitting your information through our website does not guarantee loan approval or disbursement.
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
