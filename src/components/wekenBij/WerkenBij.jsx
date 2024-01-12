import React from "react";
import './werkenBij.scss';
import jsonData from '../../data/data.json';
import { Link } from "react-router-dom";

export default function WekenBij() {

    return(
        <section className="werkenBij" id="wekenBij">
            <h2 className="werkenBij__title">Werken bij</h2>
            <article className="werkenBij__card">
                <h2 className="werkenBij__subtitle">Werken of stage lopen bij BMV</h2>
                <p className="werkenBij__paragraph">
                    BMV is altijd op zoek naar nieuwe collega’s, om aan de slag te gaan als junior-, medior- of senior-bouwmanager of projectmanager maatschappelijk vastgoed
                    Het team zoekt mensen met ervaring en een opleiding in het wetenschappelijk of hoger beroepsonderwijs, bijvoorbeeld op het gebied van bouwkunde, architectuur en vastgoedmanagement.
                </p>
                <p className="werkenBij__paragraph">
                    Maar ook aan mensen met een ogenschijnlijk minder voor de hand liggende achtergrond, bijvoorbeeld rechten, sociologie of psychologie, heeft BMV behoefte.
                    En in alle gevallen zijn een brede blik, flexibiliteit, goede omgevingsgevoeligheid en affiniteit met maatschappelijk vastgoed en het sociaal domein vereisten voor het werken bij BMV.
                </p>
                <p className="werkenBij__paragraph">
                    Wie nog studeert, is van harte welkom om stage te lopen bij BMV. Werk mee in mooie projecten, krijg inzicht in het project- en bouwmanagement en leer de gemeente Amsterdam kennen.
                    Stuur voor meer informatie over werken of stage lopen bij BMV een e-mail (met daarin in elk geval persoonlijke gegevens, een telefoonnummer en een curriculum vitae) naar capaciteit.BMV@amsterdam.nl.
                </p>
                <div className="werkenBij__buttonContainer">
                    <a href="https://werkenbij.amsterdam.nl" className="werkenBij__button">Soliciteren</a>
                    <Link to="/contact" className="nav__button">Contact</Link>
                </div>
            </article>
        </section>
    )
}