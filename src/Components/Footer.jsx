import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer
            style={{ backgroundColor: "#021518" }}
            className="bg-gray-800 py-4 mt-5"
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="text-gray-400 text-sm">
                        © 2023 Francisco Yorlano
                    </div>
                    <div className="flex items-center">
                        <a
                            href="https://github.com/FranciscoYorlano"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white mx-3"
                        >
                            <FaGithub size="1.5em" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/francisco-yorlano"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white mx-3"
                        >
                            <FaLinkedin size="1.5em" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
