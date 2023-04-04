import React from "react";

// Assets
import signinImage from "../assets/sign-in-image.png";

const SignIn = () => {
    return (
        <div className="grid-cols-2 flex">
            <div
                style={{
                    backgroundImage: `url(${signinImage})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
                className="w-1/2 h-screen"
            >
                Hola
            </div>
            <div className="w-1/2 h-screen">
                <form action="">
                    <input type="text" name="" id="" placeholder="text" />
                    <input type="text" name="" id="" placeholder="text" />
                </form>
            </div>
        </div>
    );
};

export default SignIn;
