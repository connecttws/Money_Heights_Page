import styles from './WhyChoose.module.css';

const features = [
  {
    title: "Simple Eligibility Check",
    desc: (
      <>Share <strong>basic information</strong> to understand whether you may be <strong>eligible in minutes</strong>.</>
    ),
    icon: "⚡"
  },
  {
    title: "Clear Process",
    desc: (
      <>Know the <strong>key steps involved</strong> and milestones before proceeding.</>
    ),
    icon: "🗺️"
  },
  {
    title: "Assistance With Documentation",
    desc: (
      <>Get guidance on the <strong>information and documents required</strong> for bank verification.</>
    ),
    icon: "📂"
  },
  {
    title: "Transparent Information",
    desc: (
      <>Understand that <strong>final terms, charges, and approval</strong> are determined by the respective lender.</>
    ),
    icon: "💎"
  }
];

export default function WhyChoose() {
  return (
    <section className={`section ${styles.section}`} id="why-choose">
      <div className="container">
        <div className="text-center">
          <h2 className={styles.title}>Why Choose MoneyyHeight?</h2>
          <p className={styles.subtitle}>
            <strong>Guidance</strong> Throughout Your Loan Top-Up Journey
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feat, idx) => (
            <div key={idx} className={`glass-card ${styles.card}`}>
              <div className={styles.iconWrapper}>{feat.icon}</div>
              <h3 className={styles.cardTitle}>{feat.title}</h3>
              <p className={styles.cardDesc}>{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
