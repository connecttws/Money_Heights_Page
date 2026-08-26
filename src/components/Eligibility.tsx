import styles from './Eligibility.module.css';

const criteria = [
  "Your existing car loan is with HDFC Bank, ICICI Bank, or Axis Bank.",
  "Your car loan has completed at least 1 year (12 months).",
  "Your vehicle is registered as a Private Car.",
  "You have been paying your EMIs regularly with a satisfactory repayment history.",
  "You have the required KYC, income, loan account statement and vehicle documents for verification."
];

export default function Eligibility() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center">
          <h2 className={styles.title}>Who Can Apply for This Car Loan Top-Up?</h2>
          <p className={styles.subtitle}>Check if you meet the simple criteria below to get started.</p>
        </div>
        
        <div className={styles.criteriaList}>
          {criteria.map((item, index) => (
            <div 
              key={index} 
              className={`glass-card ${styles.criteriaCard}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.checkIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
