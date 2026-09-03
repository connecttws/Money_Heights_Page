"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
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
          <>
              <h2 className={styles.title}>Check Your Eligibility Instantly</h2>
              <p className={styles.subtitle}>Fill out the details below to apply for your top-up loan.</p>
              
              {errorMsg && (
                <div style={{ color: 'red', textAlign: 'center', marginBottom: '16px' }}>
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label>Full Name</label>
                    <input type="text" name="fullName" required placeholder="Enter your full name" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Phone Number</label>
                    <input type="tel" name="phone" required placeholder="+91 XXXXX XXXXX" pattern="[0-9]*" />
                  </div>
                </div>

                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label>Email ID</label>
                    <input type="email" name="email" required placeholder="Enter your email" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Place</label>
                    <input type="text" name="place" required placeholder="Enter your city/place" />
                  </div>
                </div>

                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label>Vehicle Name</label>
                    <input type="text" name="vehicleName" required placeholder="e.g., Hyundai Creta" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Car Manufacturing Year</label>
                    <input type="number" name="carYear" required placeholder="YYYY" min="1990" max={new Date().getFullYear()} />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Do you own a private car?</label>
                  <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>
                      <input type="radio" name="carType" value="Yes – Private Car" required />
                      Yes – Private Car
                    </label>
                    <label className={styles.radioLabel}>
                      <input type="radio" name="carType" value="No – Commercial/Other Vehicle" required />
                      No – Commercial/Other Vehicle
                    </label>
                  </div>
                </div>

                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label>Existing car loan with?</label>
                    <select name="existingBank" required defaultValue="">
                      <option value="" disabled>Select Bank</option>
                      <option value="HDFC Bank">HDFC Bank</option>
                      <option value="ICICI Bank">ICICI Bank</option>
                      <option value="AXIS Bank">AXIS Bank</option>
                      <option value="Other Bank (Not Eligible)">Other Bank (Not Eligible)</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Existing Car Loan Duration?</label>
                    <select name="existingDuration" required defaultValue="">
                      <option value="" disabled>Select Duration</option>
                      <option value="Less than 1 Year (Not Eligible)">Less than 1 Year (Not Eligible)</option>
                      <option value="1 to 3 Years">1 to 3 Years</option>
                      <option value="More than 3 Years">More than 3 Years</option>
                    </select>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className={`btn-primary ${styles.submitBtn}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Submit Application'}
                </button>
              </form>
          </>
        </div>
      </div>
    </section>
  );
}
