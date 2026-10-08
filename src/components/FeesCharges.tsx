import styles from './FeesCharges.module.css';

const feeItems = [
  {
    label: "Processing Fee",
    value: "0% to up to 2%",
    subValue: "of the approved loan amount"
  },
  {
    label: "Interest Rate",
    value: "13% to 17%",
    subValue: "per annum (indicative)"
  },
  {
    label: "Loan Amount",
    value: "Customized",
    subValue: "Subject to applicant's eligibility, lender policies and specific case"
  },
  {
    label: "Other Charges",
    value: "Transparent",
    subValue: "Any applicable charges will be communicated before proceeding"
  }
];

export default function FeesCharges() {
  return (
    <section className={`section ${styles.section}`} id="fees-charges">
      <div className="container">
        <div className="text-center">
          <h2 className={styles.title}>Fees & Charges</h2>
          <h3 className={styles.subtitle}>Understand the Applicable Costs</h3>
          <p className={styles.introText}>
            The applicable costs for a car loan top-up may vary depending on the <strong>lender, loan product and the applicant&apos;s specific case</strong>.
          </p>
        </div>

        <div className={styles.grid}>
          {feeItems.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.label}>{item.label}</div>
              <div className={styles.value} style={{ color: 'var(--accent-hover)' }}>{item.value}</div>
              <div className={styles.subValue}><strong>{item.subValue}</strong></div>
            </div>
          ))}
        </div>

        <div className={styles.disclaimerBox}>
          <p className={styles.disclaimerText}>
            <strong>Processing fees and interest rates</strong> are subject to variation depending on the <strong>specific case, lender assessment, eligibility and applicable terms</strong>.
          </p>
          <p className={styles.disclaimerText}>
            The <strong>final loan amount, interest rate, processing fee, tenure and other applicable charges</strong> are subject to the <strong>respective lender&apos;s policies, assessment and approval</strong>.
          </p>
          <div className={styles.importantNotice}>
            <strong>Important Notice:</strong> Checking your eligibility or submitting your details <strong>does not guarantee loan approval</strong>, a specific loan amount, interest rate or other loan terms.
          </div>
        </div>
      </div>
    </section>
  );
}
