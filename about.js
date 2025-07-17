import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div>
      <Head>
        <title>About - Sadia Akter | Professional CV Designer</title>
      </Head>

      <Header />
      
      <main className={styles.container}>
        <section className={styles.aboutSection}>
          <h1>About Me</h1>
          <p>আসসালামু-আলাইকুম, আমি সাদিয়া আক্তার, একজন Expert CV ডিজাইনার। আমি এ যাবৎ প্রায় ৬৩০৫'টি দেশীয় সিভি ডিজাইন করেছি। এবং বর্তমানে প্রায় ৫৫৬+'টি বিদেশী সিভি ডিজাইন করেছি।</p>
          
          <h2>Privacy Note</h2>
          <p>📱 Whatsapp Number:- wa.me/+8801779148278 (এই নম্বরটি আমার বড় ভাইয়ার,একজন মেয়ে হিসেবে Privacy রক্ষার্থে নিজের নম্বরটা ব্যবহার করছি নাহ,, বিষয়টা হয়তোবা না বললেও চলতো, but আপনাদের কাছে honest থাকার জন্যে বললাম।)</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}