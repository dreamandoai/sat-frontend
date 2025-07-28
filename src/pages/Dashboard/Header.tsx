import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="bg-[#b2dafb] w-full flex justify-between items-center px-6 py-4 border-b shadow-sm">
      <a href="/en/home" className="flex items-center">
        <img src="https://images.squarespace-cdn.com/content/v1/681b8ed9160121545413f2ac/ba73ff61-d1c9-4b57-b8ef-c0c43f9109bb/LogoExtended-Black%281%29.png" alt="Dreamando Logo" className="h-12 w-auto object-contain" />
      </a>
      <nav className="flex gap-10 text-[#00213e] font-medium text-lg">
        <a href="/en/home" className="hover:underline underline-offset-4">Home</a>
        <a href="/en/about" className="hover:underline underline-offset-4">About</a>
        <a href="#plans" className="hover:underline underline-offset-4" target="_blank" rel="noopener noreferrer">Plans</a>
      </nav>
      <div className="flex gap-4">
        <a href="/fr/accueil" className="text-sm font-medium text-[#00213e] hover:text-blue-700 transition">🇫🇷 FR</a>
        <a href="/en/home" className="text-sm font-medium text-[#00213e] hover:text-blue-700 transition">🇬🇧 EN</a>
      </div>
    </div>
  )
}

export default Header;