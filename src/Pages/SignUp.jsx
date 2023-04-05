import React from "react";

// Assets
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";

// React router
import { Link } from "react-router-dom";

// Hooks
import { useState } from "react";

const SignUp = () => {
    // =========== state
    const [showPassword, setShowPassword] = useState(false);

    // =========== functions
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="h-screen w-screen grid place-items-center">
            <div className="w-1/3 px-10 rounded-3xl border-solid border-gray-500">
                <h1 className="text-4xl font-semibold">Create your account</h1>
                <p className="font-medium text-md text-gray-500 mt-2">
                    Welcome to Rick and Morty Cards
                </p>
                <div className="mt-4">
                    <div className="flex flex-col my-3">
                        <label className="font-medium">Username</label>
                        <input
                            autocomplete="off"
                            className="w-full border border-solid border-neutral-300 rounded-full text-sm font-semibold text-slate-900 leading-6 px-2 py-1"
                            placeholder="johndoe"
                            type="text"
                        />
                        <span className="text-red-500 text-xs mt-1 max-w-full overflow-y-auto">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Nulla et asperiores ab dignissimos minima,
                        </span>
                    </div>

                    <div className="flex flex-col my-3">
                        <label className="font-medium">Email</label>
                        <input
                            autocomplete="off"
                            className="w-full border border-solid border-neutral-300 rounded-full text-sm font-semibold text-slate-900 leading-6 px-2 py-1"
                            placeholder="your.email@gmail.com"
                            type="email"
                        />
                        <span className="text-red-500 text-xs mt-1 max-w-full overflow-y-auto">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Nulla et asperiores ab dignissimos minima,
                        </span>
                    </div>

                    <div className="flex flex-col my-3">
                        <label className="font-medium">Password</label>
                        <div className="relative">
                            <input
                                autocomplete="off"
                                className="w-full border border-solid border-neutral-300 rounded-full text-sm font-semibold text-slate-900 leading-6 px-2 py-1 pr-10"
                                placeholder="Enter your password"
                                type={showPassword ? "text" : "password"}
                            />
                            <button
                                className="absolute top-1/2 transform -translate-y-1/2 right-3"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? (
                                    <MdOutlineVisibilityOff />
                                ) : (
                                    <MdOutlineVisibility />
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col my-3">
                        <div className="relative">
                            <input
                                autocomplete="off"
                                className="w-full border border-solid border-neutral-300 rounded-full text-sm font-semibold text-slate-900 leading-6 px-2 py-1 pr-10"
                                placeholder="confirm your password"
                                type={showPassword ? "text" : "password"}
                            />
                        </div>
                        <span className="text-red-500 text-xs mt-1 max-w-full overflow-y-auto">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Nulla et asperiores ab dignissimos minima,
                        </span>
                    </div>

                    <div className="flex flex-col my-3">
                        <button className="mt-3 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-1 px-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                            <p className="leading-6 font-semibold text-slate-200">
                                Create account
                            </p>
                        </button>
                        <div className="flex justify-center mt-1">
                            <Link
                                to="/forgot-password"
                                className="text-sm text-blue-500 hover:text-blue-700"
                            >
                                Why should create an account?
                            </Link>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-center items-center">
                        <p className="font-medium text-base">
                            Have an account?
                        </p>
                        <Link
                            to="/signup"
                            className="ml-1 font-medium text-base hover:text-sky-500 text-sky-600"
                        >
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
