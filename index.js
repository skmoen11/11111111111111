import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Professional CV Designer | Sadia Akter</title>
        <meta name="description" content="Expert CV Design Services by Sadia Akter. ATS-friendly resumes that get you interviews." />
      </Head>

      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional CV Design Services</h1>
            <p className="text-xl mb-6">ATS-friendly resumes that get you interviews</p>
            <Link href="/contact" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-blue-100 transition duration-300 inline-block">
              Get Your CV Now
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 bg-white rounded-full overflow-hidden shadow-xl border-4 border-white">
              <img src="/images/profile.jpg" alt="Sadia Akter" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg mb-6 text-justify">
              আসসালামু-আলাইকুম, আমি সাদিয়া আক্তার, একজন Expert CV ডিজাইনার। আমি এ যাবৎ প্রায় ৬৩০৫'টি দেশীয় সিভি ডিজাইন করেছি। এবং বর্তমানে প্রায় ৫৫৬+'টি বিদেশী সিভি ডিজাইন করেছি।
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-blue-700 mb-2 animate-count">6,305+</h3>
                <p className="text-gray-700 font-medium">Local CVs Designed</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-blue-700 mb-2 animate-count">556+</h3>
                <p className="text-gray-700 font-medium">International CVs Designed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose My Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-600 mb-4 text-4xl">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">ATS-Friendly Designs</h3>
              <p className="text-gray-600 text-center">HR and ATS System approved CVs that get you noticed.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-600 mb-4 text-4xl">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">5 Years Experience</h3>
              <p className="text-gray-600 text-center">Trusted by thousands of clients for professional CV design.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-600 mb-4 text-4xl">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">100% Satisfaction</h3>
              <p className="text-gray-600 text-center">Unlimited revisions until you're completely satisfied.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8">Get a professional CV that gets you interviews</p>
          <Link href="/contact" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-bold hover:bg-blue-100 transition duration-300 inline-block">
            Contact Me Now
          </Link>
        </div>
      </section>
    </>
  )
}