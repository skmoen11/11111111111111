import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <h2>My Services</h2>
      <div className={styles.serviceGrid}>
        <div className={styles.serviceCard}>
          <h3>ATS-Friendly CV Design</h3>
          <p>HR and ATS system approved professional resume design</p>
        </div>
        <div className={styles.serviceCard}>
          <h3>Cover Letter Writing</h3>
          <p>Job-winning cover letters tailored to your application</p>
        </div>
        <div className={styles.serviceCard}>
          <h3>LinkedIn Optimization</h3>
          <p>Profile optimization to attract recruiters</p>
        </div>
      </div>
      <Link href="/services" className={styles.primaryButton}>View All Services</Link>
    </section>
  );
}