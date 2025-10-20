// src/components/Header.jsx
import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import gitIcon from "../assets/git-ico.png";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const menuRef = useRef([]);
  const underlineRef = useRef();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "Installation", path: "/installation" },
  ];

  useEffect(() => {
    // Update activeIndex based on current path
    const index = menuItems.findIndex((item) => {
      if (item.path === "/apps" && location.pathname.startsWith("/apps")) {
        return true;
      }
      return location.pathname === item.path;
    });
    setActiveIndex(index !== -1 ? index : 0);
  }, [location.pathname]);

  const handleMouseEnter = (index) => setHoverIndex(index);
  const handleMouseLeave = () => setHoverIndex(null);

  useEffect(() => {
    const index = hoverIndex !== null ? hoverIndex : activeIndex;
    const menuEl = menuRef.current[index];
    if (menuEl && underlineRef.current) {
      underlineRef.current.style.width = `${menuEl.offsetWidth}px`;
      underlineRef.current.style.left = `${menuEl.offsetLeft}px`;
    }
  }, [hoverIndex, activeIndex]);

  return (
    <header className="navbar bg-base-100 px-4 lg:px-25 relative">
      {/* Left: Logo */}
      <div className="navbar-start flex items-center gap-2 relative">
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} alt="Hero IO Logo" className="w-10 h-10" />
          <span className="text-[16px] font-bold leading-[26px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            HERO.IO
          </span>
        </NavLink>
      </div>

      {/* Hamburger Button for Mobile */}
      <div className="lg:hidden navbar-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex relative">
        <ul className="menu menu-horizontal px-1 gap-6 relative">
          {menuItems.map((item, index) => (
            <li
              key={item.name}
              ref={(el) => (menuRef.current[index] = el)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <NavLink
                to={item.path}
                className={`font-semibold text-[16px] capitalize ${
                  item.path === "/apps" && location.pathname.startsWith("/apps")
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
                    : location.pathname === item.path
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
                    : "text-black"
                }`}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          {/* Underline */}
          <span
            ref={underlineRef}
            className="absolute bottom-3 h-[2px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] transition-all duration-300"
          />
        </ul>
      </div>

      {/* Right: Contribute Button */}
      <div className="navbar-end">
        <a
          href="https://github.com/selimreza777/my-produva-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-[4px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-4 py-[12px] h-[43px] hover:opacity-90 transition-all"
          style={{ width: "145px" }}
        >
          <img src={gitIcon} alt="GitHub" className="w-5 h-5" />
          <span className="text-white font-[600] text-[16px] leading-[19px] capitalize">
            Contribute
          </span>
        </a>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md py-4">
          <ul className="flex flex-col items-center gap-3">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`font-semibold text-[16px] capitalize ${
                    location.pathname === item.path
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
                      : "text-black"
                  }`}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
