import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="bg-[#b2dafb] w-full flex justify-between items-center px-6 py-4 border-b shadow-sm">
      {/* Logo */}
      <a href="/en/home" className="flex items-center">
        <img
          src="https://images.squarespace-cdn.com/content/v1/681b8ed9160121545413f2ac/ba73ff61-d1c9-4b57-b8ef-c0c43f9109bb/LogoExtended-Black%281%29.png"
          alt="Dreamando Logo"
          className="h-12 w-auto object-contain"
        />
      </a>

      {/* Nav Links */}
      <nav 
        className="flex gap-10 text-[#00213e] hover:underline-offset-4"
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '18px',
          fontWeight: 500
        }}
      >
        <a 
          href="/en/home" 
          className="hover:underline underline-offset-4 transition-all duration-200"
          style={{
            color: '#00213e',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '18px',
            fontWeight: 500
          }}
        >
          Home
        </a>
        <a 
          href="/en/about" 
          className="hover:underline underline-offset-4 transition-all duration-200"
          style={{
            color: '#00213e',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '18px',
            fontWeight: 500
          }}
        >
          About
        </a>
        <a 
          href="#plans" 
          className="hover:underline underline-offset-4 transition-all duration-200" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            color: '#00213e',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '18px',
            fontWeight: 500
          }}
        >
          Plans
        </a>
      </nav>

      {/* Language Toggle */}
      <div className="flex gap-4">
        <a
          href="/fr/accueil"
          className="transition-all duration-200 hover:opacity-80"
          style={{
            color: '#00213e',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            fontWeight: 500
          }}
        >
          🇫🇷 FR
        </a>
        <a
          href="/en/home"
          className="transition-all duration-200 hover:opacity-80"
          style={{
            color: '#00213e',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            fontWeight: 500
          }}
        >
          🇬🇧 EN
        </a>
      </div>
    </header>
  );
}

export default Navbar;