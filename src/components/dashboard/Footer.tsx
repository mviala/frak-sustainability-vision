
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 px-6 border-t border-gray-100 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500">© 2025 Frak Labs</p>
          <a href="https://frak.id" target="_blank" rel="noopener noreferrer" className="text-xs text-[#7E69AB] hover:underline">
            frak.id
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
