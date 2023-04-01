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
                className="w-full h-screen p-52 shadow-lg shadow-pink-500/50"
            ></div>
            <div className="w-full h-screen p-52 shadow-lg shadow-pink-500/50"></div>
        </>
    );
};

export default Home;
