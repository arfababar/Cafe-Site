import React from 'react';
import './Hero.css';
import latte from '../assets/latte.jfif';
import cake from '../assets/cake.jfif';

const Hero = () => {
  return (
    <section
  id="hero"
  className="
    w-full
    bg-[#FFF7F3]
    grid
    grid-cols-3
    items-center
    px-2 sm:px-4 md:px-24
    py-10 sm:py-16 md:py-24
    overflow-hidden
  "
>
      {/* LEFT IMAGE */}
      <div className="flex justify-start">
        <div className="bg-[#F3EDE9] p-2 sm:p-3 md:p-4 rounded-3xl">
          <img
            src={latte}
            alt="Latte"
            className="hero-img rotate-[-4deg] rounded-2xl"
          />
        </div>
      </div>

      {/* CENTER TEXT */}
      <div className="flex flex-col items-center text-center">
        <h1 className="hero-title font-serif font-bold text-[#4B4453] whitespace-nowrap">
          Brew & Bloom
        </h1>

        <p className="hero-text text-[#6B5E70] max-w-md">
          For the days you need a little calm… and a lot of coffee.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-end">
        <div className="bg-[#F3EDE9] p-2 sm:p-3 md:p-4 rounded-3xl">
          <img
            src={cake}
            alt="Cake"
            className="hero-img rotate-[4deg] rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
