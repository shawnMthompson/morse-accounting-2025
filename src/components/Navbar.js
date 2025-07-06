"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/favicon.ico";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCaretDown } from "react-icons/rx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-primary border-neutral/20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Business Logo and Name */}
        <Link href="/" className="flex items-center space-x-3">
          <Image src={logo} alt="MAITS Logo" />
          <span className="self-center lg:text-2xl font-semibold whitespace-nowrap text-neutral">
            Morse Accounting and Income Tax
          </span>
        </Link>
        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-neutral hover:bg-hoverText focus:ring-accent transition-colors duration-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <GiHamburgerMenu size={24} color="#FEF5EF" />
        </button>
        {/* Navbar Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:block md:w-auto z-50`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-hoverText/20 rounded-lg bg-neutral md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-primary">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-primary rounded-sm hover:bg-hoverText md:hover:bg-transparent md:text-neutral md:p-0 md:hover:text-hoverText transition-colors duration-200"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            {/* Services Dropdown Toggle */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                id="dropdownNavbarLink"
                className="flex items-center justify-between w-full py-2 px-3 text-primary hover:bg-hoverText md:hover:bg-transparent md:border-0 md:hover:text-hoverText md:p-0 md:w-auto md:text-neutral transition-colors duration-200"
              >
                Services <RxCaretDown size={24} className="ml-1" />
              </button>
              {/* Services Dropdown */}
              <div
                id="dropdownNavbar"
                className={`${
                  isDropdownOpen ? "block" : "hidden"
                } absolute z-10 font-normal bg-neutral text-left divide-y divide-hoverText/20 rounded-lg shadow-lg w-44 border border-hoverText/20`}
                style={{ left: "50%", transform: "translateX(-50%)" }}
              >
                <ul
                  className="py-2 text-sm text-primary"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <Link
                      href="/services/accounting"
                      className="block px-4 py-2 hover:bg-hoverText hover:text-primary transition-colors duration-200"
                    >
                      Accounting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/bookkeeping"
                      className="block px-4 py-2 hover:bg-hoverText hover:text-primary transition-colors duration-200"
                    >
                      Bookkeeping
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/electronic-filing"
                      className="block px-4 py-2 hover:bg-hoverText hover:text-primary transition-colors duration-200"
                    >
                      Electronic Filing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/notary-public-financials"
                      className="block px-4 py-2 hover:bg-hoverText hover:text-primary transition-colors duration-200"
                    >
                      Notary Public
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/tax-planning"
                      className="block px-4 py-2 hover:bg-hoverText hover:text-primary transition-colors duration-200"
                    >
                      Tax Planning
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/tax-preparation"
                      className="block px-4 py-2 hover:bg-hoverText hover:text-primary transition-colors duration-200"
                    >
                      Tax Preparation
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-3 text-primary rounded-sm hover:bg-hoverText md:hover:bg-transparent md:border-0 md:hover:text-hoverText md:p-0 md:text-neutral transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
