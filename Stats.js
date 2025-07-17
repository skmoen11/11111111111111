import styles from '../styles/Home.module.css';

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.statItem}>
        <h3>6,305+</h3>
        <p>Local CVs Designed</p>
      </div>
      <div className={styles.statItem}>
        <h3>556+</h3>
        <p>International CVs</p>
      </div>
      <div className={styles.statItem}>
        <h3>5+</h3>
        <p>Years Experience</p>
      </div>
    </section>
  );
}