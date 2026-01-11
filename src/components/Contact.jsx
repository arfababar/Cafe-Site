import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const whatsappNumber = '+923001234567'; // Replace with your number
  const instagramLink = 'https://www.instagram.com/yourprofile';
  const facebookLink = 'https://www.facebook.com/yourprofile';
  const emailLink = 'mailto:info@brewbloom.com';

  return (
    <section id='contact' className="bg-[#FFF7F3] py-24 px-6 border-t border-[#F3EAE6] relative">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4B4453] mb-2">
          Contact Us
        </h2>

        {/* Decorative line */}
        <div className="w-20 h-1 bg-[#F3EAE6] mx-auto mb-6 rounded-full"></div>

        {/* Description */}
        <p className="text-[#6B5E70] text-md md:text-lg mb-12 leading-relaxed">
          Have a question, want to place an order, or just want to say hello? Reach out to us via any of the channels below. We’d love to hear from you! ☕
        </p>

        {/* Icon buttons */}
        <div className="flex justify-center gap-8">
          <a
            href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4B4453] hover:text-[#25D366] transition-transform transform hover:scale-110 duration-300 text-4xl"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4B4453] hover:text-[#E1306C] transition-transform transform hover:scale-110 duration-300 text-4xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href={facebookLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4B4453] hover:text-[#1877F2] transition-transform transform hover:scale-110 duration-300 text-4xl"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href={emailLink}
            className="text-[#4B4453] hover:text-[#6B5E70] transition-transform transform hover:scale-110 duration-300 text-4xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Optional: floating corner icons for quick access */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <a
          href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 text-2xl"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a
          href={instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-[#E1306C] p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 text-2xl"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};

export default Contact;
