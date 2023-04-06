import React from "react";

// React Router
import { Link } from "react-router-dom";

const Card = (props) => {
    const { id, name, species, gender, image } = props.char;

    return (
        <div class="w-64 bg-gradient-to-r from-purple-500 to-pink-500 border border-gray-200 rounded-lg m-none">
            <Link to={`/detail/${id}`}>
                <img class="rounded-t-lg" src={image} alt={name} />
            </Link>
            <div class="p-5">
                <Link to={`/detail/${id}`}>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                </Link>
                <p class="mb-3 text-sm leading-6 font-semibold text-slate-200">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
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
