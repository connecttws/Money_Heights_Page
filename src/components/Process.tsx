import styles from './Process.module.css';

const steps = [
  {
    step: "Step 1",
    title: "Check Your Eligibility",
    desc: (
      <>Share <strong>basic information</strong> about your <strong>existing car loan and vehicle</strong>.</>
    ),
    icon: "📝"
  },
  {
    step: "Step 2",
    title: "Eligibility Review",
    desc: (
      <>We review the information provided against the <strong>applicable lender criteria</strong>.</>
    ),
    icon: "🔍"
  },
  {
    step: "Step 3",
    title: "Documentation",
    desc: (
      <>If eligible, you may be asked to provide the <strong>required documents</strong>.</>
    ),
    icon: "📄"
  },
  {
    step: "Step 4",
    title: "Lender Assessment",
    desc: (
      <>The <strong>respective lender</strong> reviews your application and documents.</>
    ),
    icon: "🏦"
  },
  {
    step: "Step 5",
    title: "Final Decision",
    desc: (
      <>The lender determines the <strong>final loan amount, interest rate, tenure and applicable charges</strong>.</>
    ),
    icon: "⚖️"
  },
  {
    step: "Step 6",
    title: "Disbursement",
    desc: (
      <>If approved, <strong>disbursement is handled</strong> according to the lender&apos;s process and terms.</>
    ),
    icon: "💸"
  }
];

export default function Process({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="text-center">
          <h2 className={styles.title}>How the Car Loan Top-Up Process Works</h2>
          <p className={styles.subtitle}>
            A structured, transparent <strong>6-step journey</strong> from initial review to lender disbursement.
          </p>
        </div>
        
        <div className={styles.stepGrid}>
          {steps.map((item, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <span className={styles.badge}>{item.step}</span>
                <span className={styles.stepIcon}>{item.icon}</span>
              </div>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.ctaWrapper}>
          <button className="btn-primary" onClick={onOpenModal} style={{ padding: '16px 38px', fontSize: '1.15rem', fontWeight: 700 }}>
            Check Your Eligibility →
          </button>
        </div>
      </div>
    </section>
  );
}
