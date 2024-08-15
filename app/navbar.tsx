import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" p-4 co">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/" className='logo'>TinyLinks</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/faq" className="text-gray-300 hover:text-white nav">Home</Link>
          <Link href="/features" className="text-gray-300 hover:text-white nav">Features</Link>
          <Link href="/pricing" className="text-gray-300 hover:text-white nav">Pricing</Link>
          <Link href="/faq" className="text-gray-300 hover:text-white nav">FAQ</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden over">
          <Link href="/faq" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 nav-2 oo">Home</Link>
          <Link href="/features" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 nav-2">Features</Link>
          <Link href="/pricing" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 nav-2">Pricing</Link>
          <Link href="/faq" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 nav-2">FAQ</Link>
        </div>
      )}
    </nav>
  );
};


export default Navbar 
