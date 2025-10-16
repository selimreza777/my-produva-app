// src/components/Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import gitIcon from "../assets/git-ico.png";

const Header = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "Installation", path: "/installation" },
  ];

  return (
    <header className="navbar bg-base-100 px-4 lg:px-25">
      {/* Left: Logo */}
      <div className="navbar-start flex items-center gap-2">
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} alt="Hero IO Logo" className="w-10 h-10" />
          <span className="text-[16px] font-bold leading-[26px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            HERO.IO
          </span>
        </NavLink>

        {/* Mobile Hamburger */}
        <div className="dropdown lg:hidden ml-2">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 bg-base-100 rounded-box w-52"
          >
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative font-semibold text-[16px] leading-[19px] capitalize
                    ${isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]" : "text-black"}
                    after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5
                    after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2]
                    after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative font-semibold text-[16px] leading-[19px] capitalize
                  ${isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]" : "text-black"}
                  after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5
                  after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2]
                  after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Contribute Button */}
      <div className="navbar-end">
        <a
          href="https://github.com/selimreza777/my-produva-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-[4px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-4 py-[12px] h-[43px] transition-all duration-300 hover:opacity-90"
          style={{ width: "145px" }}
        >
          <img src={gitIcon} alt="GitHub" className="w-5 h-5" />
          <span className="text-white font-[600] text-[16px] leading-[19px] capitalize">
            Contribute
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
