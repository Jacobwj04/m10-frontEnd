import './navigation.scss';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const scrollToSection = (sectionId) => {
  // Get the section element
  const section = document.getElementById(sectionId);
  
  // Scroll to the section
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navigation = () =>{
    const location = useLocation();
    const myQuery  = location.pathname;
    let result = myQuery.slice(1);
    console.log(result)

    return(
        <nav className="nav">
            <figure className="nav__logoWrapper">
            <Link to="/">
                <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="" className="nav__logo" />
            </Link>
            </figure>
            <ul className="nav__linksList">
            {result === "contact" || result === "projectPage" ?(
                <li className="nav__linkItem">
                <Link to="/" className="nav__link" onClick={() => scrollToSection("organistatie")}>Home</Link>
                </li>
            ) : (
                <>
                <li className="nav__linkItem">
                <Link to="#" className="nav__link" onClick={() => scrollToSection("organistatie")}>Organistatie</Link>
                </li>
                <li className="nav__linkItem">
                <Link to="#" className="nav__link" onClick={() => scrollToSection("projecten")}>Projecten</Link>
                </li>
                <li className="nav__linkItem">
                <Link to="#" className="nav__link" onClick={() => scrollToSection("wekenBij")}>Weken Bij</Link>
                </li>
                </>
            ) }
            </ul>
            {result === "contact" ?(
                <section className="nav__buttonWrapper"></section>
            ) : (
                <section className="nav__buttonWrapper">
                    <Link to="/contact" className="nav__button">Contact</Link>
                </section>
            ) }
        </nav>
    );
}

export default Navigation;