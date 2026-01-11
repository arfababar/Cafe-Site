import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="
        bg-[#FFF7F3]
        border-t border-[#F3EAE6]
        py-14
        sm:py-20
        md:py-24
        px-4
        sm:px-6
      "
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4B4453] mb-5 sm:mb-6">
          About Brew & Bloom
        </h2>

        <p className="text-[#6B5E70] text-base sm:text-md md:text-lg leading-relaxed">
          Brew & Bloom is a warm, welcoming café designed for slow mornings and gentle conversations.
          <br /><br />
          We believe in thoughtfully sourced ingredients, beautifully brewed coffee, and creating a space
          where you can pause, unwind, and feel at home.
        </p>
      </div>
    </section>
  );
};

export default About;
