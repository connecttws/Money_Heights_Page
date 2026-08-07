import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <h1 className="animate-fade-in-up">
            Get an Instant <span className={styles.highlight}>Top-Up Loan</span><br />
            on Your Existing Car Loan
          </h1>
          <p className={`${styles.heroSubtext} animate-fade-in-up`} style={{ animationDelay: '0.2s' }}>
            Already have a car loan with HDFC Bank, ICICI Bank, or Axis Bank? You may be eligible for additional funds. We help you compare options, complete the documentation, and get faster approvals with minimal hassle.
          </p>
          <div className={`${styles.ctaGroup} animate-fade-in-up`} style={{ animationDelay: '0.4s' }}>
            <button className="btn-primary" onClick={onOpenModal}>Apply Now - Give the form</button>
          </div>
        </div>
        <div className={`${styles.heroImageWrapper} animate-fade-in-up`} style={{ animationDelay: '0.6s' }}>
          <div className={styles.heroImagePlaceholder}>
            <Image 
              src="/hero_car.png" 
              alt="Luxury Car" 
              fill 
              style={{ objectFit: 'cover', borderRadius: 'inherit' }}
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className={styles.glowOrb1}></div>
      <div className={styles.glowOrb2}></div>
    </section>
  );
}
