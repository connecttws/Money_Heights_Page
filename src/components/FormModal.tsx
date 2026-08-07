"use client";
import { useState } from 'react';
import styles from './FormModal.module.css';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FormModal({ isOpen, onClose }: FormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>
        
        {isSuccess ? (
          <div className={styles.successState}>
            <div className={styles.successIcon}>✓</div>
            <h3>Application Received!</h3>
            <p>Our team will get back to you shortly regarding your top-up loan eligibility.</p>
            <button className="btn-primary" onClick={onClose} style={{ marginTop: '24px' }}>Close</button>
          </div>
        ) : (
          <>
            <h2 className={styles.title}>Apply Now</h2>
            <p className={styles.subtitle}>Fill out the details below to check your eligibility instantly.</p>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label>Full Name</label>
                <input type="text" required placeholder="Enter your name" />
              </div>
              <div className={styles.formGroup}>
                <label>Phone Number</label>
                <input type="tel" required placeholder="+91 XXXXX XXXXX" pattern="[0-9]*" />
              </div>
              <div className={styles.formGroup}>
                <label>Existing Loan Bank</label>
                <select required>
                  <option value="" disabled selected>Select Bank</option>
                  <option value="hdfc">HDFC Bank</option>
                  <option value="icici">ICICI Bank</option>
                  <option value="axis">Axis Bank</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Loan Duration</label>
                <select required>
                  <option value="" disabled selected>Select Duration</option>
                  <option value="less_than_1">Less than 1 Year (Not Eligible)</option>
                  <option value="1_to_3">1 to 3 Years</option>
                  <option value="more_than_3">More than 3 Years</option>
                </select>
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
        )}
      </div>
    </div>
  );
}
