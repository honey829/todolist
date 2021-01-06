import React from "react";

const Header = (props) => {
    return (
        <>
            <nav className="nav-wrapper yellow darken-4">
                <label className="brand-logo center">{props.HeaderName}</label>
            </nav>
        </>
    );
};

export default Header;
