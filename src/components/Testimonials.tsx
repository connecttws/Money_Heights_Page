import styles from './Testimonials.module.css';

const reviews = [
  {
    text: "I needed urgent funds for a family medical emergency and didn't want to sell my car. The whole process was so smooth, from valuation to disbursement; everything happened within 2 days. Truly grateful for the quick support!",
    name: "Rahul Sharma",
    location: "Bhubaneswar",
    rating: 5
  },
  {
    text: "I run a small business and needed working capital without touching my business assets. Got a great valuation for my car and a much better interest rate than I expected. Highly recommend their service!",
    name: "Priya Verma",
    location: "Noida",
    rating: 5
  },
  {
    text: "What I liked most was the transparency—no hidden charges, no last-minute surprises. The team explained everything clearly before I signed anything. Simple, honest process.",
    name: "Amit Kumar",
    location: "Guwahati",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <div className="text-center">
          <h2 className={styles.title}>Customer Reviews & Testimonials</h2>
          <p className={styles.subtitle}>See what our satisfied customers have to say about our seamless service.</p>
        </div>
        
        <div className={styles.grid}>
          {reviews.map((review, index) => (
            <div key={index} className={`glass-card ${styles.card}`}>
              <div className={styles.stars}>
                {"★".repeat(review.rating)}
              </div>
              <p className={styles.quote}>"{review.text}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className={styles.name}>{review.name}</h4>
                  <p className={styles.location}>{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
