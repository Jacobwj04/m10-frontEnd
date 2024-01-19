import './mobileNavigation.scss';
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

  let menuButtonClicked = false;

  const menu = () =>{

    const menuButton = document.getElementById("mobileNav--button");
    const mobileMenu = document.getElementById("mobileNav--menu");
    const links = document.getElementsByClassName("mobileNav__listItem");

    const barOne = menuButton.children[0];
    const barTwo = menuButton.children[1];

    if(menuButtonClicked == true){
        for(let i = 0; i < links.length; i++){
            links[i].style.animationName = "textHide";
            links[i].style.animationDelay = "0s";
            links[i].style.animationDuration = "0.3s";

            setTimeout(function() {
                links[i].style.display = "none";
              }, 300);
        }
        mobileMenu.style.animationName = "menuClose";
        barOne.style.animationName = "barClose";
        barTwo.style.animationName = "barClose";
        setTimeout(function() {
            mobileMenu.style.display = "none";
          }, 1000);
    }

    const dropdownMenu = document.getElementById("mobileNav--menu");

    if(dropdownMenu.style.display === "block"){
        dropdownMenu.style.display = "none";
        menuButtonClicked = false;
    }

    if(menuButtonClicked == false){

        for(let i = 0; i < links.length; i++){
            links[i].style.animationDuration = "1.2s";
            links[i].style.animationName = "textShow";
            links[i].style.display = "flex";
        }
        barOne.style.animationName = "barOneCross";
        barTwo.style.animationName = "barTwoCross";
        mobileMenu.style.animationName = "menuOpen";
        mobileMenu.style.display = "flex";
        menuButtonClicked = true;
    }
    else{
        menuButtonClicked = false;
    }
  }

export default function MobileNavigation() {
    const location = useLocation();
    const myQuery  = location.pathname;
    let result = myQuery.slice(1);

    return(
        <>
        <nav className="mobileNav">
            <figure className="mobileNav__logoWrapper">
            <Link to="/" className='mobileNav__home'>
                <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="" className="mobileNav__logo" />
            </Link>
            </figure>
            <button class="mobileNav__button" id="mobileNav--button" onClick={() => menu()}>
                <div class="mobileNav__bars--1 mobileNav__bars"></div>
                <div class="mobileNav__bars--2 mobileNav__bars"></div>
            </button>
        </nav>
        <ul className="mobileNav__list" id='mobileNav--menu'>
            {result === "contact" || result === "projectPage" ?(
                <li className="mobileNav__listItem">
                <Link to="/" className="mobileNav__link" onClick={() => scrollToSection("organistatie")}>Home</Link>
                </li>
                ):(
                <>
                <li className="mobileNav__listItem">
                    <Link to="#" className="mobileNav__link" onClick={() => scrollToSection("organistatie")}>organistatie</Link>
                </li>
                <li className="mobileNav__listItem">
                    <Link to="#" className="mobileNav__link" onClick={() => scrollToSection("projecten")}>projecten</Link>
                </li>
                <li className="mobileNav__listItem">
                    <Link to="#" className="mobileNav__link" onClick={() => scrollToSection("wekenBij")}>wekenBij</Link>
                </li>
                </>
                )}
                {result === "contact" ?(
                    <></>
                ):(
                    <li className="mobileNav__listItem">
                    <Link to="/contact" className="mobileNav__contact">Contact</Link>
                    </li>
                )}
            </ul>
        </>
    )
}