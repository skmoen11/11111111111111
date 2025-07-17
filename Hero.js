import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>আসসালামু-আলাইকুম</h1>
        <h2>I'm Sadia Akter, Professional CV Designer</h2>
        <p>Helping professionals land their dream jobs with ATS-friendly CV designs</p>
        <div className={styles.heroButtons}>
          <Link href="/contact" className={styles.primaryButton}>Get Your CV</Link>
          <Link href="/services" className={styles.secondaryButton}>View Services</Link>
        </div>
      </div>
    </section>
  );
}