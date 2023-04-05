import React from "react";

// Assets
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";

// React router
import { Link } from "react-router-dom";

// Hooks
import { useState } from "react";

const SignIn = () => {
    // =========== state
    const [showPassword, setShowPassword] = useState(false);

    // =========== handlers
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="h-screen w-screen grid place-items-center">
            <div className="w-1/3 px-10 py-20 rounded-3xl border-solid border-gray-500">
                <h1 className="text-4xl font-semibold">Welcome Back</h1>
                <p className="font-medium text-md text-gray-500 mt-2">
                    Welcome back! Please enter you details.
                </p>
                <div className="mt-4">
                    <div className="flex flex-col my-3">
                        <label className="font-medium">Email</label>
                        <input
                            className="w-full border border-solid border-neutral-300 rounded-full text-sm font-semibold text-slate-900 leading-6 px-2 py-1"
                            placeholder="Enter your email"
                            type="email"
                        />
                    </div>

                    <div className="flex flex-col my-3">
                        <label className="font-medium">Password</label>
                        <div className="relative">
                            <input
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
                        <span className="text-red-500 text-xs mt-1 max-w-full overflow-y-auto">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Nulla et asperiores ab dignissimos minima,
                        </span>
                    </div>

                    <div className="flex flex-col my-3">
                        <button className="mt-3 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-1 px-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                            <p className="leading-6 font-semibold text-slate-200">
                                Sign In
                            </p>
                        </button>
                        <div className="flex justify-center mt-1">
                            <Link
                                to="/forgot-password"
                                className="text-sm text-blue-500 hover:text-blue-700"
                            >
                                Forgot your password?
                            </Link>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-center items-center">
                        <p className="font-medium text-base">
                            Don't have an account?
                        </p>
                        <Link
                            to="/signup"
                            className="ml-1 font-medium text-base hover:text-sky-500 text-sky-600"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
