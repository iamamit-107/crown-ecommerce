import React from "react";
import "./CustomButton.scss";
import { signInWithGoogle } from "../../Firebase/Firebase.utils";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
    return (
        <button
            className={`${
                isGoogleSignIn ? "sign-in-with-google" : ""
            } custom-button`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default CustomButton;
