import React from "react";
import './footer.scss';
import jsonData from '../../data/data.json';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <ul className="footer__list">
                <li className="footer__listItem">
                    <h2 className="footer__title">Mail</h2>
                    <p className="footer__paragraph">PMB is bereikbaar op werkdagen tussen 8.30 - 17.30 uur.</p>
                    <Link to="/contact" className="footer__button">Contact</Link>
                </li>
                <li className="footer__listItem">
                    <h2 className="footer__title">Volg het ProjectManagement Bureau</h2>
                    <ul className="footer__linkList">
                        <li className="footer__linkListItem">
                            <a href="" className="footer__link">X</a>
                        </li>
                        <li className="footer__linkListItem">
                            <a href="" className="footer__link">LinkedIn</a>
                        </li>
                    </ul>
                </li>
                <li className="footer__listItem">
                    <h2 className="footer__title">Over deze site</h2>
                    <ul className="footer__linkList">
                        <li className="footer__linkListItem">
                            <a href="" className="footer__link">Colofon</a>
                        </li>
                        <li className="footer__linkListItem">
                            <a href="" className="footer__link">Proclaimer en Copyright</a>
                        </li>
                        <li className="footer__linkListItem">
                            <a href="" className="footer__link">Sitemap</a>
                        </li>

                    </ul>
                </li>
                <li className="footer__listItem">
                    <h2 className="footer__title">Amsterdam.nl</h2>
                    <p className="footer__paragraph">Nieuws en publieksinformatie van de gemeente Amsterdam vindt u op amsterdam.nl</p>
                    <ul className="footer__linkList">
                        <li className="footer__linkListItem">
                            <a href="" className="footer__link">Naar Amsterdam.nl</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </footer>
    )

}