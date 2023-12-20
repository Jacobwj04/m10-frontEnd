import React from "react";
import './navigation.scss';

const Navigation = () =>{
    return(
        <nav className="nav">
            <figure className="nav__logoWrapper">
                <img src="./img/logo.png" alt="" className="nav__logo" />
            </figure>
            <ul className="nav__linksList">
                <li className="nav__linkItem">
                    <a href="/#organistatie" className="nav__link">Organistatie</a>
                </li>
                <li className="nav__linkItem">
                    <a href="" className="nav__link">Projecten</a>
                </li>
                <li className="nav__linkItem">
                    <a href="" className="nav__link">Werken Bij</a>
                </li>
            </ul>
            <section className="nav__buttonWrapper">
                <a href="" className="nav__button">Contact</a>
            </section>
        </nav>
    );
}

export default Navigation;