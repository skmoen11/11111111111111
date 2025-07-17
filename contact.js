import Head from 'next/head';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact - Sadia Akter | Professional CV Designer</title>
      </Head>

      <Header />
      
      <main className={styles.container}>
        <section className={styles.contactSection}>
          <h1>Contact Me</h1>
          
          <div className={styles.contactMethods}>
            <div>
              <h3>Phone</h3>
              <p>01779148278</p>
            </div>
            <div>
              <h3>WhatsApp</h3>
              <p>
                <a href="https://wa.me/+8801779148278" target="_blank" rel="noopener noreferrer">
                  Click to Chat on WhatsApp
                </a>
              </p>
            </div>
            <div>
              <h3>Email</h3>
              <p>
                <a href="mailto:maryhlarsen.1@gmail.com">maryhlarsen.1@gmail.com</a>
              </p>
            </div>
            <div>
              <h3>Facebook</h3>
              <p>
                <a href="https://www.facebook.com/sadiaakter.cvexpert/" target="_blank" rel="noopener noreferrer">
                  Profile
                </a>
                <br />
                <a href="https://www.facebook.com/bdcvexperts" target="_blank" rel="noopener noreferrer">
                  Page
                </a>
              </p>
            </div>
          </div>
          
          <h2>Send a Message</h2>
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}