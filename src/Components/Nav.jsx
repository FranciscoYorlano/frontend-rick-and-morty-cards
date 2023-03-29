// React
import React from "react";

// React router
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="bg-lime-500 p-2 grid grid-cols-3 mx-auto ">
            <div className="bg-lime-100 p-3">Rick and Morty Cards</div>
            <div className="bg-lime-300 p-3">
                <Link>Home</Link>
                <Link>All Cards</Link>
                <Link>About</Link>
            </div>
            <div className="bg-lime-900 p-3">SearchBar</div>
        </div>
    );
};

export default Nav;
