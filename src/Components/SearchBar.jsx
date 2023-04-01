import React from "react";

// Components
import Button from "./Button";

const SearchBar = () => {
    return (
        <form>
            <input
                type="number"
                placeholder="Card id"
                className="w-32 z-0 inline-block rounded-l-full text-sm leading-6 font-semibold text-slate-900 leading-6 px-2 shadow-lg hover:shadow-pink-500/50"
            />
            <button className="inline-block rounded-r-full  bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg hover:shadow-pink-500/50">
                <p className="text-sm leading-6 font-semibold text-slate-200 leading-6 mx-2">
                    Add Card
                </p>
            </button>
        </form>
    );
};

export default SearchBar;
