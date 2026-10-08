import type { Metadata } from "next";
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/components/InnerPage.module.css';

export const metadata: Metadata = {
  title: "Disclaimer | MoneyyHeight",
  description: "Official Legal & Financial Disclaimer for MoneyyHeight, a brand of JP BROTHERS CAPITAL MANAGEMENT PRIVATE LIMITED.",
};

export default function DisclaimerPage() {
  return (
    <div className={styles.pageWrapper}>
      <Header />

      <section className={styles.heroHeader}>
        <div className="container">
          <span className={styles.badge}>Regulatory Disclosure</span>
          <h1 className={styles.title}>Disclaimer</h1>
          <p className={styles.subtitle}>
            Effective Date: October 6, 2026
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
              The information provided on this website is intended for <strong>general informational and eligibility-assistance purposes</strong> relating to car loan top-up options.
            </p>

            <h2>Loan Approval</h2>
            <div className={styles.warningBox}>
              <p>
                <strong>MoneyyHeight does not guarantee loan approval</strong>, loan amount, interest rate, tenure, or any other specific loan terms.
              </p>
              <p style={{ marginTop: '8px' }}>
                Final eligibility and approval are determined exclusively by the <strong>respective lender</strong> based on its <strong>policies, credit assessment, documentation, credit profile, and applicable terms</strong>.
              </p>
              <p style={{ marginTop: '8px', fontWeight: 700 }}>
                Submitting an enquiry or eligibility form does not constitute approval of a loan or guarantee that a loan will be offered.
              </p>
            </div>

            <h2>Eligibility</h2>
            <p>
              The eligibility criteria mentioned on this website are provided for <strong>general guidance</strong>. Applicants may need to satisfy the following requirements:
            </p>
            <ul className={styles.checkList}>
              <li>An <strong>existing eligible car loan</strong> with <strong>HDFC Bank, ICICI Bank, or Axis Bank</strong></li>
              <li>An <strong>existing car loan tenure</strong> of at least <strong>1 year (12 months)</strong></li>
              <li>A <strong>vehicle age</strong> of not more than <strong>7 years old</strong></li>
              <li>An <strong>eligible private-use vehicle</strong></li>
            </ul>
            <p>
              <strong>Actual eligibility requirements</strong> may vary depending on the lender, product, and applicant profile.
            </p>

            <h2>Interest Rates, Fees & Charges</h2>
            <p>
              Interest rates, processing fees, and other applicable charges may vary depending on the <strong>lender, loan product, and applicant&apos;s specific case</strong>.
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
              The <strong>applicable rate, processing fee, loan amount, tenure, and other charges</strong> will depend on the specific case and applicable lender terms.
            </p>

            <h2>No Guarantee of Results</h2>
            <p>
              Information provided on this website <strong>should not be considered a promise or guarantee</strong> of loan approval, a specific loan amount, interest rate, or tenure. All final terms, approvals, and decisions are determined exclusively by the respective lender.
            </p>

            <div className={styles.callout}>
              <p>
                <strong>Important Information About Loan Services:</strong> MoneyyHeight is a brand of <strong>JP BROTHERS CAPITAL MANAGEMENT PRIVATE LIMITED</strong>. Car loan top-up availability, eligibility, loan amount, interest rate, tenure, fees, documentation requirements, and final approval are subject to the respective lender&apos;s policies, assessment, and applicable terms. <strong>Submitting an enquiry or eligibility form does not guarantee loan approval or disbursement.</strong>
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
