import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <nav className="container flex justify-between items-center">
        <div className="py-5 text-color-secondary font-bold text-3xl">
          <a href="#home">
            <span className="text-color-white">Light</span>Code.
          </a>
        </div>
        <div>
          <ul className="hidden lg:flex items-center space-x-6">
            <li>
              <a
                href="#home"
                className="hover:text-color-secondary ease-in delay-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-color-secondary ease-in delay-200"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#testimonial"
                className="hover:text-color-secondary ease-in delay-200"
              >
                Testimonial
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="hover:text-color-secondary ease-in delay-200"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="hover:text-color-secondary ease-in delay-200"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-color-secondary ease-in delay-200"
              >
                Contact
              </a>
            </li>

            <li>
              <button className="bg-color-secondary py-3 px-9 rounded-md capitalize font-bold hover:opacity-80 ease-in delay-200">
                Free trial
              </button>
            </li>
          </ul>
        </div>
        <div
          id="hamburger"
          className="lg:hidden cursor-pointer z-50"
          onClick={() => setIsOpen((is) => !is)}
        >
          {!isOpen ? (
            <i className="fa-solid fa-bars"></i>
          ) : (
            <i class="fa-solid fa-xmark"></i>
          )}
        </div>

        {isOpen && (
          <div
            id="menu"
            className="bg-color-primary-dark h-[100vh] absolute inset-0"
          >
            <ul className="h-full grid place-items-center">
              <li>
                <a
                  href="#home"
                  className="hover:text-color-secondary ease-in delay-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-color-secondary ease-in delay-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#testimonial"
                  className="hover:text-color-secondary ease-in delay-200"
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-color-secondary ease-in delay-200"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="hover:text-color-secondary ease-in delay-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-color-secondary ease-in delay-200"
                >
                  Contact
                </a>
              </li>

              <li>
                <button className="btn">Free trial</button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
