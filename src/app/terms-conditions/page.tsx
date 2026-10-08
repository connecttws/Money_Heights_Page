import type { Metadata } from "next";
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/components/InnerPage.module.css';

export const metadata: Metadata = {
  title: "Terms & Conditions | MoneyyHeight",
  description: "Terms & Conditions of MoneyyHeight, a brand of JP BROTHERS CAPITAL MANAGEMENT PRIVATE LIMITED. Read the terms governing our car loan top-up eligibility services.",
};

export default function TermsConditionsPage() {
  return (
    <div className={styles.pageWrapper}>
      <Header />

      <section className={styles.heroHeader}>
        <div className="container">
          <span className={styles.badge}>Legal Agreement</span>
          <h1 className={styles.title}>Terms & Conditions</h1>
          <p className={styles.subtitle}>
            Effective Date: October 6, 2026
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.contentCard}>
            <p>
              Welcome to the <strong>MoneyyHeight</strong> website.
            </p>
            <p>
              <strong>MoneyyHeight</strong> is a brand of <strong>JP BROTHERS CAPITAL MANAGEMENT PRIVATE LIMITED</strong>. By accessing or using this website, submitting an enquiry, or using any of our eligibility-related services, you agree to these <strong>Terms & Conditions</strong>.
            </p>
            <div className={styles.warningBox}>
              <p>
                <strong>Agreement Notice:</strong> If you do not agree with these terms, please do not use the website or submit your information.
              </p>
            </div>

            <h2>1. About Our Services</h2>
            <p>
              <strong>MoneyyHeight</strong> provides information and assistance to eligible customers who wish to explore <strong>car loan top-up options</strong> for their existing car loans.
            </p>
            <p>Our services may include:</p>
            <ul className={styles.checkList}>
              <li><strong>Initial eligibility assessment</strong> against participating bank criteria</li>
              <li><strong>Collection of basic customer and vehicle information</strong></li>
              <li><strong>Guidance regarding applicable eligibility requirements</strong></li>
              <li><strong>Guidance regarding required documentation</strong></li>
              <li><strong>Assistance during the applicable verification and processing stages</strong></li>
            </ul>
            <p>
              Our services <strong>do not constitute a guarantee</strong> that a loan will be approved or disbursed.
            </p>

            <h2>2. Eligibility</h2>
            <p>
              The <strong>basic eligibility criteria</strong> displayed on our website may include:
            </p>
            <ul className={styles.checkList}>
              <li>An <strong>existing car loan</strong> with <strong>HDFC Bank, ICICI Bank, or Axis Bank</strong></li>
              <li>Existing car loan tenure of at least <strong>1 year (12 months)</strong></li>
              <li>Vehicle age of <strong>not more than 7 years old</strong></li>
              <li>Eligible <strong>private-use vehicle</strong></li>
              <li>Required documentation available for verification</li>
              <li>Applicable lender <strong>credit and eligibility requirements</strong> satisfied</li>
            </ul>
            <p>
              These criteria are provided for <strong>general guidance</strong> and may vary depending on the lender, loan product, and applicant profile. <strong>Meeting the stated criteria does not guarantee loan approval.</strong>
            </p>

            <h2>3. Loan Approval</h2>
            <p><strong>MoneyyHeight does not guarantee:</strong></p>
            <ul>
              <li><strong>Loan approval</strong> or sanction</li>
              <li>A specific <strong>loan amount</strong></li>
              <li>A specific <strong>interest rate</strong></li>
              <li>A specific <strong>repayment tenure</strong></li>
              <li>A specific <strong>processing fee</strong></li>
              <li>Any particular <strong>processing or disbursement timeline</strong></li>
            </ul>
            <p>
              The <strong>final decision</strong> regarding loan approval and applicable loan terms is subject exclusively to the <strong>respective lender&apos;s assessment, policies, documentation, and applicable terms</strong>.
            </p>

            <h2>4. Interest Rates, Fees & Charges</h2>
            <p>
              Applicable interest rates, processing fees, service charges, and other costs may vary depending on the <strong>lender, loan product, and applicant&apos;s specific case</strong>.
            </p>
            
            <div className={styles.rateCardsGrid}>
              <div className={styles.rateCard}>
                <div className={styles.rateLabel}>Indicative Interest Rate</div>
                <div className={styles.rateValue}>13% to 17%</div>
                <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0' }}>per annum</p>
              </div>

              <div className={styles.rateCard}>
                <div className={styles.rateLabel}>Indicative Processing Fee</div>
                <div className={styles.rateValue}>0% to up to 2%</div>
                <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0' }}>of the loan amount</p>
              </div>
            </div>

            <p>
              The <strong>actual interest rate, processing fee, loan amount, tenure, and other applicable charges</strong> will depend on the specific case and applicable lender terms. Customers should review the applicable terms and charges before proceeding with any loan.
            </p>

            <h2>5. Information Provided by Users</h2>
            <p>
              When submitting an eligibility form or contacting us, you agree to provide information that is <strong>accurate, complete, and up to date</strong>.
            </p>
            <p>The information you may provide can include:</p>
            <ul>
              <li><strong>Full Name, Phone number, and Email address</strong></li>
              <li><strong>City or place of residence</strong></li>
              <li><strong>Vehicle details and vehicle manufacturing year</strong></li>
              <li><strong>Existing car-loan details and bank tenure</strong></li>
              <li>Other information required for the eligibility process</li>
            </ul>
            <p>
              <strong>User Responsibility:</strong> You are responsible for ensuring that the information provided by you is accurate. Providing false, incomplete, or misleading information may affect the eligibility or processing of your request.
            </p>

            <h2>6. Use of Submitted Information</h2>
            <p>Information submitted through the website may be used to:</p>
            <ul className={styles.checkList}>
              <li>Review your eligibility for top-up options</li>
              <li>Respond to your enquiry and customer service requests</li>
              <li>Contact you regarding the requested service</li>
              <li>Guide you through applicable bank requirements</li>
              <li>Facilitate applicable verification or lender processing</li>
              <li>Communicate information relating to the requested financial service</li>
            </ul>
            <p>
              Your information will be handled in strict accordance with our <Link href="/privacy-policy" style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'underline' }}>Privacy Policy</Link>.
            </p>

            <h2>7. Communication</h2>
            <p>
              By submitting your information through our website, you agree that we may contact you regarding your enquiry, eligibility, and related services through available communication channels, including <strong>phone calls, SMS, email, or WhatsApp</strong>.
            </p>
            <p>
              You may request that we stop non-essential communications at any time by contacting us.
            </p>

            <h2>8. Website Information</h2>
            <p>
              We make reasonable efforts to keep the information on our website accurate and current. However, eligibility criteria, interest rates, fees, charges, product availability, and other information may change based on lender policies or other applicable circumstances. We reserve the right to <strong>update, modify, or remove website content without prior notice</strong>.
            </p>

            <h2>9. Third-Party Services and Links</h2>
            <p>
              Our website may contain links, videos, forms, or services provided by third parties. Third-party websites and services are governed by their own terms and privacy policies. <strong>MoneyyHeight is not responsible</strong> for the content, availability, or privacy practices of third-party websites accessed through our links.
            </p>

            <h2>10. No Financial Guarantee</h2>
            <p>
              Information provided on this website is for <strong>general informational and eligibility-assistance purposes</strong>. Nothing on this website should be interpreted as a promise or guarantee of loan approval, loan amount, interest rate, tenure, fees, or disbursement. The <strong>final decision rests exclusively with the respective lender</strong>.
            </p>

            <h2>11. Limitation of Liability</h2>
            <p>
              To the extent permitted by applicable law, <strong>MoneyyHeight and JP BROTHERS CAPITAL MANAGEMENT PRIVATE LIMITED</strong> shall not be responsible for losses arising from:
            </p>
            <ul>
              <li>Rejection of a loan request by any lender</li>
              <li>Changes in lender eligibility criteria or underwriting rules</li>
              <li>Changes in interest rates or applicable charges</li>
              <li>Delays in lender processing or documentation appraisal</li>
              <li>Inaccurate or incomplete information provided by the user</li>
              <li>Credit underwriting decisions made by the respective lender</li>
              <li>Unavailability or temporary interruption of third-party services</li>
            </ul>

            <h2>12. Prohibited Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Provide false, forged, or misleading information</li>
              <li>Use the website for unlawful or fraudulent purposes</li>
              <li>Attempt to gain unauthorized access to the website or its systems</li>
              <li>Interfere with the website&apos;s normal operation</li>
              <li>Use another person&apos;s personal details without authorization</li>
            </ul>

            <h2>13. Intellectual Property</h2>
            <p>
              The content, text, graphics, branding, logos, and other materials available on the MoneyyHeight website are owned by or used with permission by the respective rights holder. You may not reproduce, copy, modify, distribute, or commercially use website content without appropriate prior authorization.
            </p>

            <h2>14. Privacy</h2>
            <p>
              Your use of this website is also subject to our <Link href="/privacy-policy" style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'underline' }}>Privacy Policy</Link>, which explains how we collect, use, and handle personal information. Please review the Privacy Policy before submitting your personal information.
            </p>

            <h2>15. Changes to These Terms</h2>
            <p>
              We may update these Terms & Conditions from time to time. Any updated version will be published on this page with a revised effective date. Your continued use of the website after an update constitutes acceptance of the updated terms, to the extent permitted by applicable law.
            </p>

            <div className={styles.callout}>
              <p>
                <strong>Important Notice:</strong> MoneyyHeight is a brand of <strong>JP BROTHERS CAPITAL MANAGEMENT PRIVATE LIMITED</strong>. Car loan top-up availability, eligibility, loan amount, interest rate, tenure, fees, documentation requirements, and final approval are subject to the respective lender&apos;s policies, assessment, and applicable terms. <strong>Submitting an enquiry or eligibility form does not guarantee loan approval or disbursement.</strong>
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
