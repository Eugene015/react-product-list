import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="h-[50px] flex justify-between px-10 bg-blue-800 items-center text-white">
      <span className="font-bold">Products List</span>

      <span>
        <Link to="/" className="mr-4 hover:text-[#999]">
          Products
        </Link>
        <Link to="/about" className="hover:text-[#999]">
          About
        </Link>
      </span>
    </nav>
  );
}
