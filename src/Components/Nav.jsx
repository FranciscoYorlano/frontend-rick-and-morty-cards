// React
// React
import React from "react";

// React router
import { Link } from "react-router-dom";

// Assets
import logo from "../assets/logo.png";

const Nav = () => {
    return (
        <div
            style={{ backgroundColor: "#021518" }}
            className="fixed w-full h-14 grid grid-cols-3 mx-auto "
        >
            <div className="my-auto">
                <img src={logo} alt="Rick and Morty Cards" className="h-10" />
            </div>
            <nav className="mx-auto my-auto text-sm leading-6 font-semibold  dark:text-slate-200">
                <ul className="flex space-x-8">
                    <li>
                        <Link to="/home" className="hover:text-sky-500 mx-2">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/cards" className="hover:text-sky-500 mx-2">
                            All Cards
                        </Link>
                    </li>
                    <li>
                        {" "}
                        <Link to="/about" className="hover:text-sky-500 mx-2">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="my-auto text-right mr-8">
                <button className="inline-block rounded-full  bg-gradient-to-r from-purple-500 to-pink-500 ">
                    <p className="text-sm leading-6 font-semibold  dark:text-slate-200 leading-8 mx-2">
                        Sign in
                    </p>
                </button>
            </div>
        </div>
    );
};

export default Nav;
