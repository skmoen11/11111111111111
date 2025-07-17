import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">Sadia Akter</Link>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-200">Home</Link>
            <Link href="/services" className="hover:text-blue-200">Services</Link>
            <Link href="/portfolio" className="hover:text-blue-200">Portfolio</Link>
            <Link href="/contact" className="hover:text-blue-200">Contact</Link>
          </div>
          
          <button 
            className="md:hidden text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-2 space-y-2">
            <Link href="/" className="block hover:bg-blue-500 px-2 py-1 rounded">Home</Link>
            <Link href="/services" className="block hover:bg-blue-500 px-2 py-1 rounded">Services</Link>
            <Link href="/portfolio" className="block hover:bg-blue-500 px-2 py-1 rounded">Portfolio</Link>
            <Link href="/contact" className="block hover:bg-blue-500 px-2 py-1 rounded">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  )
}