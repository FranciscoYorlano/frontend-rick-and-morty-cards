// React
import React from "react";

// Images
import homeImage from "../assets/home-image.jpg";

const Home = () => {
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${homeImage})`,
                    backgroundSize: "cover",
                }}
                className="w-screen h-screen p-52 "
            >
                <button className="inline-block mx-auto rounded-full px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                    Rick and Morty Cards App
                </button>
            </div>
            <div className="object-cover w-screen h-screen"></div>
        </>
    );
};

export default Home;
