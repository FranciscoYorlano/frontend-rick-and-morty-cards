import React from "react";

// Assets
import {
    AiFillHeart,
    AiOutlineHeart,
    AiOutlineClose,
    AiOutlineIdcard,
} from "react-icons/ai";
import { GiBackPain, GiAnatomy } from "react-icons/gi";

// Hooks
import { useState } from "react";

// React Router
import { Link } from "react-router-dom";

const Card = (props) => {
    const { id, name, species, gender, image } = props.char;

    // States
    const [isFav, setIsFav] = useState(false);

    // Handlers
    const handleFavorite = () => {
        setIsFav((prevIsFav) => !prevIsFav);
    };

    const handleClose = () => {};

    return (
        <div className="relative w-64 bg-gradient-to-r from-purple-500 to-pink-500 border border-gray-200 rounded-lg m-none text-center text-slate-200">
            <div className="absolute top-0 left-0 z-10 w-full  flex justify-end items-baseline">
                <div className="flex items-center text-sm leading-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 rounded-bl-md rounded-tr-md">
                    <AiOutlineIdcard className="inline-flex" size="1.5rem" />
                    <span className="text-base ml-1">{id}</span>
                </div>
            </div>

            <Link to={`/detail/${id}`}>
                <img className="rounded-t-lg" src={image} alt={name} />
            </Link>
            <div className="p-5">
                <Link to={`/detail/${id}`}>
                    <h5 className="mb-2 h-24 text-2xl font-bold tracking-tight">
                        {name}
                    </h5>
                    <div className="mb-2"></div>
                </Link>
                <div className="flex justify-between border-b border-solid pb-2">
                    <p
                        className="flex items-center my-2 text-sm leading-6 font-normal"
                        style={{ flexBasis: "45%" }}
                    >
                        <GiBackPain className="inline-flex" size="1.5rem" />
                        <span className="text-base ml-1">{species}</span>
                    </p>
                    <p
                        className="flex items-center my-2 text-sm leading-6 font-normal"
                        style={{ flexBasis: "45%" }}
                    >
                        <GiAnatomy className="inline-flex" size="1.5rem" />
                        <span className="text-base ml-1">{gender}</span>
                    </p>
                </div>

                <div className="flex items-center mt-2 text-sm leading-6 font-normal">
                    <button onClick={() => handleFavorite()}>
                        {isFav ? (
                            <AiFillHeart size="1.5rem" className="" />
                        ) : (
                            <AiOutlineHeart size="1.5rem" className="" />
                        )}
                    </button>
                    <button onClick={() => handleClose()} className="ml-auto">
                        <AiOutlineClose size="1.5rem" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
