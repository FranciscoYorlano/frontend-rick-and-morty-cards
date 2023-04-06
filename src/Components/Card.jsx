import React from "react";

// Assets
import {
    AiFillHeart,
    AiOutlineHeart,
    AiOutlineClose,
    AiOutlineIdcard,
} from "react-icons/ai";
import { GiBackPain, GiAnatomy } from "react-icons/gi";

// React Router
import { Link } from "react-router-dom";

const Card = (props) => {
    const { id, name, species, gender, image } = props.char;

    return (
        <div class="relative w-48 bg-gradient-to-r from-purple-500 to-pink-500 border border-gray-200 rounded-lg m-none text-center text-slate-200">
            <div class="absolute top-0 left-0 z-10 w-full h-full flex justify-center items-center">
                <div class="flex items-center text-sm leading-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 rounded-bl-md rounded-tr-md">
                    <AiOutlineIdcard className="inline-flex" size="1.5rem" />
                    <span class="text-base ml-1">{id}</span>
                </div>
            </div>
            <Link to={`/detail/${id}`}>
                <img class="rounded-t-lg" src={image} alt={name} />
            </Link>
            <div class="p-5">
                <Link to={`/detail/${id}`}>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight">
                        {name}
                    </h5>
                </Link>
                <p class="flex items-center my-2 text-sm leading-6 font-normal">
                    <GiBackPain className="inline-flex" size="1.5rem" />
                    <span class="text-base ml-1">{species}</span>
                </p>
                <p class="flex items-center my-2 text-sm leading-6 font-normal">
                    <GiAnatomy className="inline-flex" size="1.5rem" />
                    <span class="text-base ml-1">{gender}</span>
                </p>
                <a
                    href="#"
                    class="inline-flex items-center text-sm font-medium text-center text-white bg-blue-700 rounded-lg"
                >
                    Read more
                </a>
            </div>
        </div>
    );
};

export default Card;
