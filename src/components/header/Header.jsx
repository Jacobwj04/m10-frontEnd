import React from "react";
import './header.scss';

const Header = () => {
    return(
        <header className="header">
            <figure className="header__imgWrapper">
                <img src={process.env.PUBLIC_URL + '/img/banner.webp'} alt="" className="header__img" />
                <section className="header__textWrapper">
                    <h1 className="header__title">Projectmanagementbureau</h1>
                    <h1 className="header__title">Bouwmanagement en Maatschappelijk Vastgoed</h1>
                </section>
            </figure>
        </header>
    )
};

export default Header;