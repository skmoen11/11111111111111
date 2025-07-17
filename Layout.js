import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>Sadia Akter - Professional CV Designer</title>
        <meta name="description" content="Expert CV Design Services by Sadia Akter. ATS-friendly resumes that get you interviews." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  )
}