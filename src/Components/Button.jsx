import React from "react";

const Button = (props) => {
    const { label, onClickCallback } = props;

    return (
        <button
            className="inline-block rounded-full  bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg hover:shadow-pink-500/50"
            onClick={onClickCallback}
        >
            <p className="text-sm leading-6 font-semibold text-slate-200 leading-6 mx-2">
                {label}
            </p>
        </button>
    );
};

export default Button;
