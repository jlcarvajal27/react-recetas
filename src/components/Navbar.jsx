import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-slate-700 py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <ul
          className="list-style-none me-auto flex flex-col ps-0 lg:flex-row"
          data-twe-navbar-nav-ref
        >
          <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
            <Link
              className="text-white lg:px-2 font-bold text-2xl"
              to="/"
              data-twe-nav-link-ref
            >
              Busca tu Receta!
            </Link>
          </li>
        </ul>

        <div className="relative flex items-center">
          <Link to="/favoritos" className="me-4 dark:text-white">
            <span className="[&>svg]:w-10 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
