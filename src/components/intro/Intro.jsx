import React from "react";
import './intro.scss';

const Intro = () => {
    return(
        <ul className="intro">
            <li className="intro__leftSection">
                <h2 className="intro__title">Bijdragen aan een toekomstbestendige stad</h2>
                <h3 className="intro__subTitle">Een sociaal-duurzaam Amsterdam</h3>
                <p className="intro__paragraph">Voor veel mensen is en blijft Amsterdam een zeer aantrekkelijke plek om te wonen en dus blijven we bouwen aan de groei van de stad <br></br><br></br>.Maar Amsterdam bestaat natuurlijk uit méér dan alleen woningen. Daarom bouwen we aan een sociaal-duurzaam Amsterdam: een stad die het welzijn van haar bewoners belangrijk vindt en verbetert, door niet alleen woningen te bouwen maar ook te zorgen voor maatschappelijke voorzieningen, voor huidige bewoners en toekomstige generaties.</p>
            </li>
            <li className="intro__rightSection">
                <figure className="intro__imgWrapper">
                    <img src={process.env.PUBLIC_URL + '/img/Sluisbuurt.png'} alt="" className="intro__img" />
                </figure>
            </li>
        </ul>
    );
}

export default Intro