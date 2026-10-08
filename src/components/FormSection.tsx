"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './FormSection.module.css';

export default function FormSection() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
          (window as any).gtag('event', 'conversion', {
            send_to: 'AW-18371984960/z2RzCPrg-_IcEMD8uLhE',
            value: 1.0,
            currency: 'INR',
          });
        }
        await new Promise(resolve => setTimeout(resolve, 300));
        router.push('/thank-you');
      } else {
        const errorData = await res.json();
        setErrorMsg(errorData.error || 'Failed to submit form.');
      }
    } catch (error) {
      setErrorMsg('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="apply-form" className={styles.formSection}>
      <div className={styles.container}>
        <div className={styles.formCard}>
          <div className={styles.badgeWrapper}>
            <span className={styles.formBadge}>⚡ Fast Online Eligibility Check</span>
          </div>

          <h2 className={styles.title}>Check Your Eligibility Instantly</h2>
          <p className={styles.subtitle}>
            Fill out the details below to check your <strong>car loan top-up eligibility</strong> with partner banks.
          </p>
          
          {errorMsg && (
            <div style={{ color: '#ef4444', textAlign: 'center', marginBottom: '16px', fontWeight: 700 }}>
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label>Full Name *</label>
                <input type="text" name="fullName" required placeholder="Enter your full name" />
              </div>
              <div className={styles.formGroup}>
                <label>Phone Number *</label>
                <input type="tel" name="phone" required placeholder="+91 XXXXX XXXXX" pattern="[0-9]*" />
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label>Email ID *</label>
                <input type="email" name="email" required placeholder="Enter your email address" />
              </div>
              <div className={styles.formGroup}>
                <label>City / Place *</label>
                <input type="text" name="place" required placeholder="e.g., Noida, Delhi, Mumbai" />
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label>Vehicle Name / Model *</label>
                <input type="text" name="vehicleName" required placeholder="e.g., Hyundai Creta, Maruti Swift" />
              </div>
              <div className={styles.formGroup}>
                <label>Car Manufacturing Year *</label>
                <input type="number" name="carYear" required placeholder="YYYY (e.g., 2021)" min="1990" max={new Date().getFullYear()} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Do you own a private car? *</label>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input type="radio" name="carType" value="Yes – Private Car" required />
                  <span><strong>Yes</strong> – Private Car</span>
                </label>
                <label className={styles.radioLabel}>
                  <input type="radio" name="carType" value="No – Commercial/Other Vehicle" required />
                  <span><strong>No</strong> – Commercial / Other</span>
                </label>
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label>Existing car loan with? *</label>
                <select name="existingBank" required defaultValue="">
                  <option value="" disabled>Select Your Existing Bank</option>
                  <option value="HDFC Bank">HDFC Bank</option>
                  <option value="ICICI Bank">ICICI Bank</option>
                  <option value="AXIS Bank">AXIS Bank</option>
                  <option value="Other Bank (Not Eligible)">Other Bank (Not Eligible)</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Existing Car Loan Duration? *</label>
                <select name="existingDuration" required defaultValue="">
                  <option value="" disabled>Select Loan Vintage</option>
                  <option value="Less than 1 Year (Not Eligible)">Less than 1 Year (Not Eligible)</option>
                  <option value="1 to 3 Years">1 to 3 Years (Eligible)</option>
                  <option value="More than 3 Years">More than 3 Years (Eligible)</option>
                </select>
              </div>
            </div>

            {/* Mandatory Consent Checkbox */}
            <div className={styles.consentContainer}>
              <input
                type="checkbox"
                id="consentCheckbox"
                name="consentAgreed"
                required
                className={styles.consentCheckbox}
              />
              <label htmlFor="consentCheckbox" className={styles.consentText}>
                I agree to be contacted regarding my <strong>car loan top-up eligibility</strong> and related services. I have read and agree to the <Link href="/privacy-policy" target="_blank">Privacy Policy</Link> and <Link href="/terms-conditions" target="_blank">Terms & Conditions</Link>.
              </label>
            </div>
            
            <button 
              type="submit" 
              className={`btn-primary ${styles.submitBtn}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Checking Eligibility...' : 'Check Your Eligibility →'}
            </button>

            <p className={styles.disclaimerText}>
              <strong>Disclaimer:</strong> Eligibility is subject to lender policies, credit assessment, documentation, and final approval. Submitting your details does not guarantee loan approval.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
