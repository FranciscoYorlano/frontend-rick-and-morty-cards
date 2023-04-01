// React
import React from "react";

// React router
import { Link } from "react-router-dom";

// Assets
import logo from "../assets/logo.png";
import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";

// Components
import Button from "./Button";
import SearchBar from "./SearchBar";

const Nav = () => {
    const isSignIn = true;

    return (
        <div
            style={{ backgroundColor: "#021518" }}
            className=" w-full h-14 grid grid-cols-3"
        >
            <div className="my-auto">
                <img src={logo} alt="Rick and Morty Cards" className="h-10" />
            </div>

            <div className="my-auto text-right mx-auto flex">
                {isSignIn ? (
                    <>
                        <SearchBar />
                    </>
                ) : (
                    <>
                        <div className="mx-2 flex">
                            <Button label="Sign in" />
                        </div>
                    </>
                )}
            </div>
            <div className="items-center ml-auto flex mr-5">
                <nav className="text-sm leading-6 font-semibold text-slate-200">
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

                    <Link
                        to="https://www.linkedin.com/in/francisco-yorlano"
                        target="blanc"
                        className="hover:text-sky-500 mx-2 block"
                    >
                        <BsLinkedin size="1.5em" className="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;
