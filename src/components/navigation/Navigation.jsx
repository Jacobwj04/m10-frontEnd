import React from "react";
import './navigation.scss';
import { Link } from "react-router-dom";

const scrollToSection = (sectionId) => {
  // Get the section element
  const section = document.getElementById(sectionId);
  
  // Scroll to the section
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navigation = () =>{
    return(
        <nav className="nav">
            <figure className="nav__logoWrapper">
            <Link to="/">
                <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="" className="nav__logo" />
            </Link>
            </figure>
            <ul className="nav__linksList">
                <li className="nav__linkItem">
                    <Link to="#" className="nav__link" onClick={() => scrollToSection("organistatie")}>Organistatie</Link>
                </li>
                <li className="nav__linkItem">
                    <Link to="#" className="nav__link" onClick={() => scrollToSection("projecten")}>Projecten</Link>
                </li>
                <li className="nav__linkItem">
                    <Link to="#" className="nav__link" onClick={() => scrollToSection("wekenBij")}>Weken Bij</Link>
                </li>
            </ul>
            <section className="nav__buttonWrapper">
                <Link to="/contact" className="nav__button">Contact</Link>
            </section>
        </nav>
    );
}

export default Navigation;