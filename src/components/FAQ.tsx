"use client";
import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  { q: "Who is eligible for this service?", a: "Customers with an existing HDFC Bank, ICICI Bank, or Axis Bank private car loan that has completed at least 1 year." },
  { q: "Can I apply if my loan is less than one year old?", a: "No. Currently, this service is available only for loans that have completed a minimum of 12 months." },
  { q: "Is this available for commercial vehicles?", a: "No. This service is currently available only for Private Cars." },
  { q: "Which banks are eligible?", a: "HDFC Bank, ICICI Bank, and Axis Bank." },
  { q: "What documents are required?", a: "Basic KYC documents, income proof, RC, insurance copy, and existing loan details." },
  { q: "How long does the process take?", a: "The processing time depends on document verification and the bank's approval process." },
  { q: "Does submitting the form guarantee loan approval?", a: "No. Final approval, eligibility, loan amount, and applicable terms are determined solely by the respective bank after reviewing your application." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section">
      <div className="container">
        <div className="text-center">
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>Find answers to common questions about our car loan top-up service.</p>
        </div>
        
        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className={styles.questionWrapper}>
                <h4 className={styles.question}>{faq.q}</h4>
                <div className={styles.icon}>
                  {openIndex === index ? '−' : '+'}
                </div>
              </div>
              <div className={styles.answerWrapper}>
                <p className={styles.answer}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
