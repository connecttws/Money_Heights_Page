import styles from './VSLSection.module.css';

export default function VSLSection() {
  return (
    <section className={`section ${styles.vslSection}`}>
      <div className="container">
        <div className="text-center">
          <h2 className={styles.title}>See How Easy It Is to Get Your Top-Up</h2>
          <p className={styles.subtitle}>Watch our quick video to understand how you can unlock the value of your existing car loan in just a few simple steps.</p>
        </div>
        
        <div className={styles.videoContainerWrapper}>
          <div className={styles.videoContainer}>
            {/* VSL Placeholder - In a real app, you might embed an iframe (YouTube/Vimeo) here */}
            <div className={styles.videoPlaceholder}>
              <div className={styles.playButton}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                </svg>
              </div>
              <p className={styles.videoText}>Watch the Process</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
