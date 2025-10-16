// src/components/Footer.jsx
import React from "react";
import logo from "../assets/logo.png"; // Make sure this exists

const Footer = () => {
  return (
    <footer className="bg-[#001931] text-gray-200 py-10">
      {/* Container with responsive padding */}
      <div className="mx-auto px-6 md:px-[80px] grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-8">

        {/* About Section */}
        <div className="flex flex-col">
          <div className="flex items-start mb-2">
            <img src={logo} alt="Logo" className="w-12 h-12 mr-3 -mt-2 flex-shrink-0" />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-white">Hero.io</h2>
              <p className="text-gray-400 text-sm mt-1">
                Empowering your digital journey with style and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/apps" className="hover:text-white transition">Apps</a></li>
            <li><a href="/installation" className="hover:text-white transition">Installation</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: <a href="mailto:info@hero.io" className="hover:text-white transition">info@hero.io</a></li>
            <li>Phone: <a href="tel:+880123456789" className="hover:text-white transition">+880 1234 56789</a></li>
            <li>Address: 123 Tech Street, Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Twitter */}
            <a href="#" className="hover:text-blue-500 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 5.924a8.3 8.3 0 01-2.356.645 4.1 4.1 0 001.804-2.27 8.18 8.18 0 01-2.605.996 4.093 4.093 0 00-6.974 3.733A11.61 11.61 0 013 4.92a4.092 4.092 0 001.27 5.456 4.07 4.07 0 01-1.856-.513v.05a4.093 4.093 0 003.28 4.01 4.1 4.1 0 01-1.85.07 4.093 4.093 0 003.824 2.84A8.207 8.207 0 012 19.54 11.565 11.565 0 008.29 21c7.547 0 11.675-6.155 11.675-11.49 0-.175-.004-.349-.012-.522a8.18 8.18 0 002.008-2.628l-.003-.001z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="hover:text-blue-700 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c-5.514 0-10 4.486-10 10 0 5.513 4.486 10 10 10s10-4.487 10-10c0-5.514-4.486-10-10-10zm3.92 7.695a1.08 1.08 0 11-2.16 0 1.08 1.08 0 012.16 0zm-3.92 1.788a3.58 3.58 0 110 7.16 3.58 3.58 0 010-7.16zm0 5.88a2.3 2.3 0 100-4.6 2.3 2.3 0 000 4.6z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="hover:text-blue-600 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.783 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.379-1.121-2.5-2.5-2.5s-2.5 1.121-2.5 2.5v5.5h-3v-10h3v1.356c.794-1.172 2.297-1.356 3.5-1.356 2.485 0 4.5 2.016 4.5 4.5v5.5z"/>
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" className="hover:text-red-600 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-1.302-.054-6.507-.054-6.507-.054s-5.206 0-6.508.054c-1.277.053-2.264 1.033-2.318 2.318-.054 1.302-.054 4.009-.054 4.009s0 2.708.054 4.01c.054 1.285 1.041 2.265 2.318 2.318 1.302.054 6.507.054 6.507.054s5.206 0 6.508-.054c1.277-.053 2.264-1.033 2.318-2.318.054-1.302.054-4.009.054-4.009s0-2.708-.054-4.01c-.054-1.285-1.041-2.265-2.318-2.318zm-11.615 8.816v-5l5 2.5-5 2.5z"/>
              </svg>
            </a>
            {/* TikTok */}
            <a href="#" className="hover:text-black transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.99 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54v-2.2c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.89h-2.33v6.99c4.78-.75 8.44-4.89 8.44-9.88 0-5.52-4.48-10-10-10z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        &copy; 2025 Hero.io. All rights reserved. Designed with ❤️ by Selim Reza.
      </div>
    </footer>
  );
};

export default Footer;
