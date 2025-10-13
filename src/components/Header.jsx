// src/components/Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"; // logo.png assets folder এ রাখো

const Header = () => {
  return (
    <header className="navbar bg-base-100 shadow-sm px-4 lg:px-20">
      {/* Logo + HERO.IO + Mobile Menu */}
      <div className="navbar-start flex items-center gap-2">
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} alt="Hero IO Logo" className="w-10 h-10" />
          <span className="text-[16px] font-bold leading-[26px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            HERO.IO
          </span>
        </NavLink>

        {/* Mobile Hamburger */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : ""
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : ""
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : ""
              }
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : ""
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Contribution Button */}
      <div className="navbar-end">
        <a
          href="https://github.com/selimreza777/my-produva-app"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Contribution
        </a>
      </div>
    </header>
  );
};

export default Header;
