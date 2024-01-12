import './footer.scss';
import jsonData from '../../data/data.json';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Footer() {
    const location = useLocation();
    const myQuery  = location.pathname;
    let result = myQuery.slice(1);
    console.log(result);

    return (
        <footer className="footer">
            <ul className="footer__list">
                <li className="footer__listItem">
                    <h2 className="footer__title">Mail</h2>
                    <p className="footer__paragraph">PMB is bereikbaar op werkdagen tussen 8.30 - 17.30 uur.</p>
                    {result  === "contact" ? <></> : <Link to="/contact" className="footer__button">Contact</Link>}
                </li>
                <li className="footer__listItem">
                    <h2 className="footer__title">Volg het ProjectManagement Bureau</h2>
                    <ul className="footer__linkList">
                        <li className="footer__linkListItem">
                            <a href="https://www.linkedin.com/company/projectmanagement-bureau" className="footer__link">LinkedIn</a>
                        </li>
                    </ul>
                </li>
                <li className="footer__listItem">
                    <h2 className="footer__title">Over deze site</h2>
                    <ul className="footer__linkList">
                        <li className="footer__linkListItem">
                            <a href="https://www.amsterdam.nl/pmb/algemene-onderdelen/colofon/" className="footer__link">Colofon</a>
                        </li>
                        <li className="footer__linkListItem">
                            <a href="https://www.amsterdam.nl/pmb/algemene-onderdelen/proclaimer-copyright/" className="footer__link">Proclaimer en Copyright</a>
                        </li>
                        <li className="footer__linkListItem">
                            <a href="https://www.amsterdam.nl/pmb/algemene-onderdelen/sitemap/" className="footer__link">Sitemap</a>
                        </li>

                    </ul>
                </li>
                <li className="footer__listItem">
                    <h2 className="footer__title">Amsterdam.nl</h2>
                    <p className="footer__paragraph">Nieuws en publieksinformatie van de gemeente Amsterdam vindt u op amsterdam.nl</p>
                    <ul className="footer__linkList">
                        <li className="footer__linkListItem">
                            <a href="https://www.amsterdam.nl/" className="footer__link">Naar Amsterdam.nl</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </footer>
    )

}