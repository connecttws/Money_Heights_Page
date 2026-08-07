import styles from './Process.module.css';

const steps = [
  { title: "Fill the Application Form", icon: "📝" },
  { title: "Eligibility Check", icon: "🔍" },
  { title: "Document Verification", icon: "📄" },
  { title: "Bank Processing", icon: "🏦" },
  { title: "Approval & Disbursement", icon: "💸" },
];

export default function Process({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="section" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <div className="text-center">
          <h2 className={styles.title}>How Our Process Works</h2>
          <p className={styles.subtitle}>
            Applying for a Car Loan Top-Up is quick and hassle-free. Our team guides you through every step, making the entire process simple and convenient.
          </p>
        </div>
        
        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepIconWrapper}>
                <div className={styles.stepIcon}>{step.icon}</div>
                {index < steps.length - 1 && <div className={styles.connector}></div>}
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>Step {index + 1}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`text-center ${styles.ctaWrapper}`}>
          <button className="btn-primary" onClick={onOpenModal}>Apply Now</button>
        </div>
      </div>
    </section>
  );
}
