import styles from './Hero.module.css';

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <h1 className="animate-fade-in-up">
            <span className={styles.titleMain}>
              Explore <span className={styles.highlight}>Car Loan Top-Up Options</span>
            </span>
            <span className={styles.heroTitleSub}>
              for Your Existing Car Loan
            </span>
          </h1>
          
          <p className={`${styles.heroSubtext} animate-fade-in-up`} style={{ animationDelay: '0.15s' }}>
            Need additional funds while continuing with your existing car loan? <strong>MoneyyHeight</strong> helps eligible <strong>existing car-loan customers</strong> explore suitable <strong>top-up loan options</strong> based on their <strong>lender</strong>, <strong>repayment history</strong>, <strong>vehicle details</strong>, and other eligibility requirements.
          </p>

          {/* VSL Video Container - Preserved strictly in place */}
          <div className={`${styles.videoContainerWrapper} animate-fade-in-up`} style={{ animationDelay: '0.3s' }}>
            <div className={styles.videoContainer}>
              <iframe
                src="https://fast.wistia.net/embed/iframe/rndvo64mfb?seo=false&videoFoam=true"
                title="MoneyyHeight VSL"
                allow="autoplay; fullscreen"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
              ></iframe>
            </div>
          </div>
          
          <div className={`${styles.ctaGroup} animate-fade-in-up`} style={{ animationDelay: '0.4s' }}>
            <button className={`btn-primary ${styles.heroCtaBtn}`} onClick={onOpenModal}>
              Check Your Eligibility
            </button>
          </div>

          {/* Feature Strip under CTA */}
          <div className={`${styles.featuresStrip} animate-fade-in-up`} style={{ animationDelay: '0.45s' }}>
            <span className={styles.featureItem}><span className={styles.featureCheck}>✓</span> Fast Online Review</span>
            <span className={styles.featureItem}><span className={styles.featureCheck}>✓</span> 100% Confidential</span>
            <span className={styles.featureItem}><span className={styles.featureCheck}>✓</span> Minimum 1 Year Old Loan</span>
          </div>

          <p className={styles.heroDisclaimer}>
            <strong>Disclaimer:</strong> Eligibility is subject to lender policies, credit assessment, documentation, and final approval. Submitting your details does not guarantee loan approval.
          </p>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className={styles.glowOrb1}></div>
      <div className={styles.glowOrb2}></div>
    </section>
  );
}
