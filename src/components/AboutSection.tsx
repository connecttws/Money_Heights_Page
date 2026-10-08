import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section className={styles.section} id="about-moneyyheight">
      <div className="container">
        {/* Car Loan Top-Up Options Made Simple */}
        <div className={styles.optionsBlock}>
          <h2 className={styles.optionsTitle}>Car Loan Top-Up Options Made Simple</h2>
          <p className={styles.optionsText}>
            If you already have a car loan and need additional funds, you may be able to explore a <strong>car loan top-up option</strong> with your existing lender.
          </p>
          <p className={styles.optionsText}>
            At <strong>MoneyyHeight</strong>, we help eligible customers understand their options and guide them through the process, from <strong>initial eligibility assessment</strong> to <strong>document verification</strong> and <strong>lender processing</strong>.
          </p>
          <p className={styles.optionsText} style={{ marginBottom: 0, fontWeight: 600, color: 'var(--primary)' }}>
            The <strong>final loan amount, interest rate, tenure, charges, and approval</strong> are determined by the respective lender based on its policies and assessment.
          </p>
        </div>

        {/* About MoneyyHeight */}
        <div className={styles.aboutBlock}>
          <span className={styles.badge}>Corporate DSA Transparency</span>
          <h2 className={styles.aboutTitle}>About MoneyyHeight</h2>
          
          <p className={styles.leadText}>
            <strong>MoneyyHeight</strong> is a brand of <strong>JP BROTHERS CAPITAL MANAGEMENT PRIVATE LIMITED</strong>, a <strong>Direct Selling Agent (DSA)</strong> working with participating lending institutions. We assist eligible customers with the initial eligibility and documentation process. Final approval and loan terms are determined by the respective lender.
          </p>
          
          <p className={styles.bodyText}>
            We help eligible customers explore <strong>car loan top-up options</strong> and provide guidance throughout the <strong>eligibility, documentation, and application process</strong>.
          </p>
          
          <p className={styles.bodyText}>
            We are authorized to facilitate eligible financial products offered by our associated lending partners, including <strong>HDFC Bank, ICICI Bank, and Axis Bank</strong>, subject to the applicable authorization terms and lender requirements.
          </p>

          <div className={styles.partnersGrid}>
            <div className={styles.partnerBadge}>
              <span className={styles.partnerBadgeDot}></span>
              <span><strong>HDFC Bank</strong> • Retail Lending Partner</span>
            </div>
            <div className={styles.partnerBadge}>
              <span className={styles.partnerBadgeDot}></span>
              <span><strong>ICICI Bank</strong> • Retail Lending Partner</span>
            </div>
            <div className={styles.partnerBadge}>
              <span className={styles.partnerBadgeDot}></span>
              <span><strong>Axis Bank</strong> • Retail Lending Partner</span>
            </div>
          </div>

          <div className={styles.disclaimerCallout}>
            <strong>Important Declaration:</strong> We <strong>do not make or guarantee loan approvals</strong>. All applications, eligibility decisions, interest rates, terms, documentation requirements, and approvals are subject to the <strong>respective lender&apos;s policies, assessment, and approval procedures</strong>. Our services are provided in accordance with applicable regulatory requirements and the policies of the respective lending institutions.
          </div>
        </div>
      </div>
    </section>
  );
}
