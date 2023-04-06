import React from "react";

// Assets
import { TbError404 } from "react-icons/tb";

// React router
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="h-screen w-screen grid justify-items-center text-center">
            <div className="mt-5">
                <TbError404 size="10rem" className="mx-auto" />
                <h1 className="text-4xl font-semibold">
                    Sorry, this page isn't available.
                </h1>
                <p className="font-medium text-md text-gray-500 mt-2">
                    The link you followed may be broken, or the page may have
                    been removed. Go back to{" "}
                    <Link
                        to="/home"
                        className="font-medium text-base hover:text-sky-500 text-sky-600"
                    >
                        Rick and Morty App
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default NotFound;
