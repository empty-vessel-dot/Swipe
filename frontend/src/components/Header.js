import React from "react";
import logo from "../assets/logo-dark.svg";
import { Link } from "react-router-dom";
const Header = () => {
  const user = localStorage.getItem("user");
  return (
    <>
      <div className="bg-blue-200 p-4 h-[90px] sticky top-0 z-50 flex justify-between items-center">
        <Link to="/">
          <img className="h-16" src={logo} />
        </Link>

        <div className="flex justify-evenly gap-20 items-center font-bold text-lg">
          <Link
            to="/products"
            className="cursor-pointer hover:underline underline-offset-2 hover:text-purple-400 hover:scale-105"
          >
            Products
          </Link>
          <Link
            to="/solution"
            className="cursor-pointer hover:underline underline-offset-2 hover:text-purple-400 hover:scale-105"
          >
            Solution
          </Link>
          <Link
            to="/resources"
            className="cursor-pointer hover:underline underline-offset-2 hover:text-purple-400 hover:scale-105"
          >
            Resources
          </Link>
          <Link
            to="/pricing"
            className="cursor-pointer hover:underline underline-offset-2 hover:text-purple-400 hover:scale-105"
          >
            Pricing
          </Link>
          {user ? (
            <h1
              className="cursor-pointer hover:underline underline-offset-2 hover:text-purple-400 hover:scale-105"
              onClick={() => {
                localStorage.clear("user");
                alert("Successfully logout!!");
                window.location.reload();
              }}
            >
              Logout
            </h1>
          ) : (
            <Link
              to="/login"
              className="cursor-pointer hover:underline underline-offset-2 hover:text-purple-400 hover:scale-105"
            >
              Sign in
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
