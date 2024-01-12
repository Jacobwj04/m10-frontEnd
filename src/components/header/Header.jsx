import React from "react";
import './header.scss';

const Header = () => {
    return(
        <header className="header">
            <figure className="header__imgWrapper">
                <img src={process.env.PUBLIC_URL + '/img/banner.webp'} alt="" className="header__img" />
                <h1 className="header__title">Bouwmanagement en Maatschappelijk Vastgoed</h1>
            </figure>
        </header>
    )
};

export default Header;