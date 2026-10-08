import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand Col */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              Moneyy<span className={styles.logoAccent}>Height</span>
            </Link>
            <span className={styles.subBrand}>A brand of JP BROTHERS CAPITAL MANAGEMENT PRIVATE LIMITED</span>
            <p className={styles.brandDesc}>
              A Direct Selling Agent (DSA) assisting eligible existing car loan borrowers in exploring seamless top-up loan options with associated lending institutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><Link href="/">Home</Link></li>
              <li className={styles.linkItem}><Link href="/about-us">About Us</Link></li>
              <li className={styles.linkItem}><Link href="/contact-us">Contact Us</Link></li>
              <li className={styles.linkItem}><Link href="/#apply-form">Check Eligibility</Link></li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h4 className={styles.colTitle}>Legal</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li className={styles.linkItem}><Link href="/terms-conditions">Terms & Conditions</Link></li>
              <li className={styles.linkItem}><Link href="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className={styles.colTitle}>Contact Us</h4>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>B-124, 3RD FLOOR SECTOR 6 NOIDA GAUTAM BUDDHA UTTAR PRADESH 201301</span>
              </div>
              <div className={styles.contactItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:7011797201">+91 7011797201</a>
              </div>
              <div className={styles.contactItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:jpbrothers1198@gmail.com">jpbrothers1198@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & DSA Notice */}
        <div className={styles.disclaimerBox}>
          <strong>Regulatory Notice:</strong> MoneyyHeight is a brand of JP BROTHERS CAPITAL MANAGEMENT PRIVATE LIMITED, a Direct Selling Agent (DSA) working with participating lending institutions including HDFC Bank, ICICI Bank, and Axis Bank. We assist eligible customers with the initial eligibility and documentation process. Final approval, loan amount, interest rate, tenure, and applicable charges are determined exclusively by the respective lender based on credit assessment and policies. Submitting your details does not guarantee loan approval.
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottomBar}>
          <div>
            © {new Date().getFullYear()} MoneyyHeight (JP BROTHERS CAPITAL MANAGEMENT PRIVATE LIMITED). All rights reserved.
          </div>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span className={styles.dot}>•</span>
            <Link href="/terms-conditions">Terms & Conditions</Link>
            <span className={styles.dot}>•</span>
            <Link href="/disclaimer">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
