import styles from './Eligibility.module.css';

const criteria = [
  {
    highlight: "Existing Bank",
    text: "Have an existing car loan with HDFC Bank, ICICI Bank or Axis Bank",
    boldWord: "HDFC Bank, ICICI Bank or Axis Bank"
  },
  {
    highlight: "Loan Vintage",
    text: "Your existing car loan is at least 1 year (12 months) old",
    boldWord: "at least 1 year old"
  },
  {
    highlight: "Vehicle Age",
    text: "Your car is not more than 7 years old",
    boldWord: "not more than 7 years old"
  },
  {
    highlight: "Vehicle Usage",
    text: "Have an eligible private-use vehicle (commercial vehicles not eligible)",
    boldWord: "eligible private-use vehicle"
  },
  {
    highlight: "Lender Criteria",
    text: "Meet the applicable lender's eligibility and credit criteria",
    boldWord: "eligibility and credit criteria"
  },
  {
    highlight: "Verification",
    text: "Can provide the required KYC, income, and vehicle documents",
    boldWord: "required documents"
  }
];

export default function Eligibility() {
  return (
    <section className="section" id="eligibility-criteria">
      <div className="container">
        <div className="text-center">
          <h2 className={styles.title}>Who May Be Eligible?</h2>
          <h3 className={styles.subHeading}>Check Your Eligibility for a Car Loan Top-Up</h3>
          <p className={styles.subtitle}>
            You may be eligible if you meet the following conditions:
          </p>
        </div>
        
        <div className={styles.criteriaGrid}>
          {criteria.map((item, index) => (
            <div key={index} className={styles.criteriaCard}>
              <div className={styles.checkIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.criteriaCardContent}>
                <p>
                  {index === 0 && (
                    <>Have an existing car loan with <strong>HDFC Bank, ICICI Bank or Axis Bank</strong></>
                  )}
                  {index === 1 && (
                    <>Your existing car loan is <strong>at least 1 year old</strong></>
                  )}
                  {index === 2 && (
                    <>Your car is <strong>not more than 7 years old</strong></>
                  )}
                  {index === 3 && (
                    <>Have an <strong>eligible private-use vehicle</strong></>
                  )}
                  {index === 4 && (
                    <>Meet the applicable <strong>lender&apos;s eligibility and credit criteria</strong></>
                  )}
                  {index === 5 && (
                    <>Can provide the <strong>required documents</strong></>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.disclaimerBox}>
          <strong>Please Note:</strong> Eligibility, loan amount, interest rate, tenure, fees, and final approval are subject to the respective lender&apos;s policies, credit assessment, and documentation. Meeting the basic criteria does not guarantee loan approval.
        </div>
      </div>
    </section>
  );
}
