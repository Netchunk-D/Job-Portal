import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
const Navbar = () => {
  const [isMenuOpen, SetIsMenuOpen] = useState(false);
  const toggle = () => {
    SetIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My Job" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Posy a Job" },
  ];

  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        <a href="/" className="flex items-center gap-2 text-2xl text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="45"
            height="45"
            viewBox="0 0 50 50"
          >
            <path d="M 17 5 C 14.250484 5 12 7.2504839 12 10 L 12 12 L 10 12 C 7.2504839 12 5 14.250484 5 17 L 5 40 C 5 42.749516 7.2504839 45 10 45 L 33 45 C 35.749516 45 38 42.749516 38 40 L 38 38 L 40 38 C 42.749516 38 45 35.749516 45 33 L 45 10 C 45 7.2504839 42.749516 5 40 5 L 17 5 z M 17 7 L 40 7 C 41.668484 7 43 8.3315161 43 10 L 43 33 C 43 34.668484 41.668484 36 40 36 L 38 36 L 36 36 L 17 36 C 15.331516 36 14 34.668484 14 33 L 14 23 C 14 21.883334 14.883334 21 16 21 L 19 21 L 19 27 C 19 29.197334 20.802666 31 23 31 L 29 31 L 31 31 L 34 31 C 36.197334 31 38 29.197334 38 27 L 38 17 C 38 14.250484 35.749516 12 33 12 L 14 12 L 14 10 C 14 8.3315161 15.331516 7 17 7 z M 10 14 L 12 14 L 14 14 L 33 14 C 34.668484 14 36 15.331516 36 17 L 36 27 C 36 28.116666 35.116666 29 34 29 L 31 29 L 31 23 C 31 20.802666 29.197334 19 27 19 L 21 19 L 19 19 L 16 19 C 13.802666 19 12 20.802666 12 23 L 12 33 C 12 35.749516 14.250484 38 17 38 L 36 38 L 36 40 C 36 41.668484 34.668484 43 33 43 L 10 43 C 8.3315161 43 7 41.668484 7 40 L 7 17 C 7 15.331516 8.3315161 14 10 14 z M 21 21 L 27 21 C 28.116666 21 29 21.883334 29 23 L 29 29 L 23 29 C 21.883334 29 21 28.116666 21 27 L 21 21 z"></path>
          </svg>
          Job Portal
        </a>

        {/*nav items for large screen*/}

        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primery">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        {/*Login and sign in page*/}
        <div className="text-base text-primery font-medium space-x-5 hidden lg:block">
          <Link to="/login" className="py-2 px-5 border rounded ">
            Login
          </Link>
          <Link
            to="/sign-up"
            className="py-2 px-5 border rounded bg-blue text-white"
          >
            Sign Up
          </Link>
        </div>
        {/*Mobile menu*/}
        <div className="md:hidden block">
          <button onClick={toggle}>
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5 text-primery" />
            ) : (
              <FaBarsStaggered className="w-5 h-5 text-primery" />
            )}
          </button>
        </div>
      </nav>
      {/*Navitems for Mobile */}
      <div
        className={`px-4 bg-black py-5 rounded-sm ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <ul>
          {navItems.map(({ path, title }) => (
            <li
              key={path}
              className="text-base text-white first:text-white py-1"
            >
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
          <li className="text-white py-1"><Link to="/login" className="py-2 px-5 rounded ">
            Login
          </Link>
          </li>

        </ul>
      </div>
    </header>
  );
};

export default Navbar;
