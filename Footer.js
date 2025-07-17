import styles from '../styles/Home.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Contact Me</h3>
          <p>Phone: 01779148278</p>
          <p>Email: maryhlarsen.1@gmail.com</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Follow Me</h3>
          <a href="https://www.facebook.com/sadiaakter.cvexpert/" target="_blank" rel="noopener noreferrer">Facebook Profile</a>
          <a href="https://www.facebook.com/bdcvexperts" target="_blank" rel="noopener noreferrer">Facebook Page</a>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Sadia Akter - Professional CV Designer
      </div>
    </footer>
  );
}