import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sadia Akter - Professional CV Designer</title>
        <meta name="description" content="Expert CV Design Services by Sadia Akter" />
      </Head>

      <Header />
      <Hero />
      <Services />
      <Stats />
      <Testimonials />
      <Footer />
    </div>
  );
}