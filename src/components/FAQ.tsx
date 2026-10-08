"use client";
import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: "Q1. What is a car loan top-up?",
    a: (
      <>A car loan top-up is an <strong>additional funding option</strong> that may be available to eligible customers who <strong>already have an active car loan</strong>, subject to the lender&apos;s policies and eligibility criteria.</>
    )
  },
  {
    q: "Q2. Who can explore a car loan top-up?",
    a: (
      <><strong>Existing car-loan customers</strong> who meet the applicable lender, repayment track record, vehicle, and credit eligibility requirements may be able to explore this option.</>
    )
  },
  {
    q: "Q3. Can I get a top-up if my existing car loan is less than one year old?",
    a: (
      <>Eligibility depends on the <strong>applicable lender&apos;s requirements and repayment history</strong>. The required repayment period may vary (typically loans must be <strong>at least 1 year / 12 months old</strong>).</>
    )
  },
  {
    q: "Q4. Is the top-up loan available for commercial vehicles?",
    a: (
      <>Availability depends on the lender&apos;s product and eligibility criteria. The option described on this page is intended strictly for <strong>eligible private-use vehicles</strong> where applicable.</>
    )
  },
  {
    q: "Q5. Which banks are eligible?",
    a: (
      <>Eligibility depends on the lender and the applicable product criteria. Customers with loans from <strong>HDFC Bank, ICICI Bank, or Axis Bank</strong> can provide their existing lender details during the eligibility check.</>
    )
  },
  {
    q: "Q6. What documents are required?",
    a: (
      <>Documents may vary depending on the lender and applicant profile. You may be asked to provide <strong>vehicle documents (RC), existing loan statement, identity/KYC proofs, and income documents</strong>.</>
    )
  },
  {
    q: "Q7. Does submitting the form guarantee loan approval?",
    a: (
      <><strong>No.</strong> Submitting your details <strong>only allows an eligibility review</strong>. Final approval, loan amount, interest rate, tenure, and charges are <strong>subject to the respective lender&apos;s assessment and policies</strong>.</>
    )
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="text-center">
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>Find clear answers to common questions about our car loan top-up eligibility review process.</p>
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
