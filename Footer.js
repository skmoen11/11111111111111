import { FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Sadia Akter</h3>
            <p className="text-gray-400">Professional CV Designer</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/sadiaakter.cvexpert/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 text-2xl">
              <FaFacebook />
            </a>
            <a href="mailto:maryhlarsen.1@gmail.com" className="hover:text-blue-400 text-2xl">
              <FaEnvelope />
            </a>
            <a href="https://wa.me/+8801779148278" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 text-2xl">
              <FaWhatsapp />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Sadia Akter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}