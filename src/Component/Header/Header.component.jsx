import React from "react";
import "./Header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/Firebase.utils";

const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    Shop
                </Link>
                <Link to="/shop" className="option">
                    Contact
                </Link>
                {currentUser ? (
                    <div
                        className="option"
                        style={{ cursor: "pointer" }}
                        onClick={() => auth.signOut()}
                    >
                        Sing Out
                    </div>
                ) : (
                    <Link to="/signin" className="option">
                        Singin
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Header;
