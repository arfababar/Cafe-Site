import React from 'react';
import latte from '../assets/p1.jfif';
import cappuccino from '../assets/p2.jfif';
import cake from '../assets/p3.jfif';
import muffin from '../assets/p4.jfif';
import c1 from '../assets/c1.jfif';
import c2 from '../assets/c2.jfif';
import c3 from '../assets/c3.jfif';
import c4 from '../assets/c4.jfif';

// Prices in numbers
const menuItems = [
  { name: 'Cappuccino', price: 1599, img: latte },
  { name: 'Matcha Latte', price: 1299, img: cappuccino },
  { name: 'Espresso', price: 550, img: cake },
  { name: 'Icecream Coffee', price: 350, img: muffin },
];

const bakeryItems = [
  { name: 'Brownie Icecream', price: 399, img: c1 },
  { name: 'Tiramisu', price: 299, img: c2 },
  { name: 'Red Velvet', price: 699, img: c3 },
  { name: 'Chocolate Pastry', price: 199, img: c4 },
];

const formatPKR = (amount) =>
  new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: 'PKR',
  }).format(amount);

const Menu = () => {
  return (
    <section
      id="menu"
      className="bg-[#FFF7F3] py-20 sm:py-24 px-4 sm:px-6 border-t border-[#F3EAE6]"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4B4453] mb-6">
          Our Menu
        </h2>

        <p className="text-[#6B5E70] text-base md:text-lg mb-12 max-w-3xl mx-auto">
          Indulge in our carefully curated selection of coffees, pastries, and sweet treats.
        </p>

        {/* Coffee */}
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#4B4453] mb-6">
          Coffee Delights
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#F3EDE9] rounded-3xl p-5 flex flex-col items-center shadow-sm hover:shadow-lg transition-shadow"
            >
              <img
                src={item.img}
                alt={item.name}
                className="
                  w-28 h-28
                  sm:w-32 sm:h-32
                  md:w-40 md:h-40
                  object-cover
                  rounded-2xl
                  mb-4
                "
              />
              <h3 className="text-lg md:text-xl font-semibold text-[#4B4453] mb-1">
                {item.name}
              </h3>
              <p className="text-[#6B5E70] font-medium">
                {formatPKR(item.price)}
              </p>
            </div>
          ))}
        </div>

        {/* Bakery */}
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#4B4453] mb-6">
          Bakery Delights
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {bakeryItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#F3EDE9] rounded-3xl p-5 flex flex-col items-center shadow-sm hover:shadow-lg transition-shadow"
            >
              <img
                src={item.img}
                alt={item.name}
                className="
                  w-28 h-28
                  sm:w-32 sm:h-32
                  md:w-40 md:h-40
                  object-cover
                  rounded-2xl
                  mb-4
                "
              />
              <h3 className="text-lg md:text-xl font-semibold text-[#4B4453] mb-1">
                {item.name}
              </h3>
              <p className="text-[#6B5E70] font-medium">
                {formatPKR(item.price)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
