import React from "react";

const TopHeader = () => {
  return (
    <div className="bg-gradient-1 py-3 text-white">
      <div className="wrapper flex justify-between items-center">
        {/* Centered Text on Mobile */}
        <p className="text-sm md:text-base text-center mx-auto md:mx-0">
          Now partnered with Stenograph:{" "}
          <a href="/learn-more" className="underline hover:text-gray-200">
            Learn more
          </a>
        </p>

        {/* Login Dropdown for Large Screens */}
        <div className="hidden lg:block relative">
          <button className="text-sm md:text-base font-medium hover:text-gray-200">
            Login
          </button>
          <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg py-2 w-48 hidden group-hover:block">
            <a
              href="/freelance-login"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Freelance Login
            </a>
            <a
              href="/customer-login"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Customer Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
