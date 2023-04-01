// React
// React
import React from "react";

// React router
import { Link } from "react-router-dom";

// Assets
import logo from "../assets/logo.png";
import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";

const Nav = () => {
    return (
        <div
            style={{ backgroundColor: "#021518" }}
            className="fixed w-full h-14 grid grid-cols-3"
        >
            <div className="my-auto">
                <img src={logo} alt="Rick and Morty Cards" className="h-10" />
            </div>

            <div className="my-auto text-right mx-auto">
                <button className="inline-block rounded-full  bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg hover:shadow-pink-500/50 ">
                    <p className="text-sm leading-6 font-semibold text-slate-200 leading-6 mx-2">
                        Sign in
                    </p>
                </button>
            </div>
            <div className="items-center ml-auto flex mr-5">
                <nav className="text-sm leading-6 font-semibold text-slate-700 text-slate-200">
                    <ul className="flex space-x-8">
                        <li>
                            <Link
                                to="/home"
                                className="hover:text-sky-500 mx-2"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/cards"
                                className="hover:text-sky-500 mx-2"
                            >
                                All Cards
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="hover:text-sky-500 mx-2"
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center border-l border-slate-800 ml-6 pl-6">
                    <Link
                        to="https://github.com/FranciscoYorlano"
                        target="blanc"
                        className="hover:text-sky-500 mx-2 block"
                    >
                        <VscGithub size="1.5em" className="" />
                    </Link>

                    <Link to="" className="hover:text-sky-500 mx-2 block">
                        <BsLinkedin size="1.5em" className="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;
