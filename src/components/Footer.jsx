import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#FFF7F3] border-t border-[#F3EAE6] py-12 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Branding */}
        <h3 className="text-2xl font-serif font-bold text-[#4B4453]">Brew & Bloom</h3>
        <p className="text-[#6B5E70] text-sm mt-2">
          Your cozy corner for artisanal coffee & delicate blooms
        </p>

        {/* Copyright */}
        <p className="text-[#6B5E70] text-xs mt-6">
          © {new Date().getFullYear()} Brew & Bloom. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
