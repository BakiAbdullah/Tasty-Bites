import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBeer, FaUserCircle } from "react-icons/fa";
import ActiveLink from "../../../ActiveLink";
import { AuthContext } from "../../../providers/AuthProvider";
// import Banner from "../../Home/Banner";

const Header = () => {
  const { user, logOut, username } = useContext(AuthContext);
  // console.log(username);

  // const [isHovering, setIsHovering] = useState(false);
  // const handleMouseOver = () => {
  //   setIsHovering(!isHovering);
  // };

  const handleSignOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="navbar shadow-md bg-amber-500 px-10 py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                <ActiveLink
                  className="hover:bg-red-800 hover:text-white"
                  to="/"
                >
                  Home
                </ActiveLink>
              </li>
              <li>
                <ActiveLink
                  className="hover:bg-red-800 hover:text-white"
                  to="/contact"
                >
                  contact
                </ActiveLink>
              </li>
              <li>
                <ActiveLink
                  className="hover:bg-red-800 hover:text-white"
                  to="/blog"
                >
                  Blog
                </ActiveLink>
              </li>
            </ul>
          </div>
          <p className="font-bold text-4xl">
            Tasty<span className="text-red-800">Bites</span>
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <ActiveLink className="hover:bg-red-800 hover:text-white" to="/">
                Home
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                className="hover:bg-red-800 hover:text-white"
                to="/contact"
              >
                contact
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                className="hover:bg-red-800 hover:text-white"
                to="/blog"
              >
                Blog
              </ActiveLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-4 mr-4">
          {user ? (
            <button onClick={handleSignOut}> Sign out</button>
          ) : (
            <Link to="/login">Login </Link>
          )}
        </div>

        <div>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="rounded-full">
                  {user ? (
                    user?.photoURL ? (
                      <img src={user.photoURL} alt="" srcset="" />
                    ) : (
                      <FaUserCircle className="text-2xl"></FaUserCircle>
                    )
                  ) : (
                    <FaUserCircle className="text-2xl"></FaUserCircle>
                  )}
                </div>
              </label>
            </div>
          </div>
        </div>
        {/* <div>
          <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOver}
            role="button"
            tabIndex={-3}
            className="flex-none gap-2"
          >
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="rounded-full">
                  {user ? (
                    isHovering ? (
                      user.userName
                    ) : (
                      <img src={user?.photoURL} alt="" srcset="" />
                    )
                  ) : (
                    <FaUserCircle className="text-2xl"></FaUserCircle>
                  )}
                </div>
              </label>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
