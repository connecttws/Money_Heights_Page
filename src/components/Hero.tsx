import styles from './Hero.module.css';

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <h1 className="animate-fade-in-up">
            <span className={styles.topLine}>Get an Instant</span>{' '}
            <span className={styles.highlight}>Top-Up Loan</span>
            <span className={styles.heroTitleSub}>on Your Existing Car Loan</span>
          </h1>
          
          <div className={`${styles.videoContainerWrapper} animate-fade-in-up`} style={{ animationDelay: '0.2s' }}>
            <div className={styles.videoContainer}>
              <iframe
                src="https://fast.wistia.net/embed/iframe/rndvo64mfb?seo=false&videoFoam=true"
                title="MoneyyHeights VSL"
                allow="autoplay; fullscreen"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
              ></iframe>
            </div>
          </div>

          <p className={`${styles.heroSubtext} animate-fade-in-up`} style={{ animationDelay: '0.4s' }}>
            Already have a car loan with <strong style={{ color: '#000', fontWeight: '800' }}>HDFC, ICICI, or Axis Bank</strong>? You may be eligible for additional funds with quick approvals and minimal paperwork
          </p>
          
          <div className={`${styles.ctaGroup} animate-fade-in-up`} style={{ animationDelay: '0.6s' }}>
            <button className="btn-primary" onClick={onOpenModal}>Apply Now</button>
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className={styles.glowOrb1}></div>
      <div className={styles.glowOrb2}></div>
    </section>
  );
}
