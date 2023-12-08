import React from "react";
import './organistatie.scss'

// const changeCardStyle = (id) => {

//     if(id ==! null){
//         const card = document.getElementById(id);
//         card.style.width = '100%';
//     }else{
//         console.log('clicked')
//     }
// };

// onClick={changeCardStyle('card1')}

const Organistatie = () => {
    return(
        <section className="organistatie">
            <h2 className="organistatie__title">Organistatie</h2>
            <ul className="organistatie__cards">
                <li className="organistatie__card" id="card1">
                    <h3 className="organistatie__cardTitle">Bouwmanagement en Maatschappelijk Vastgoed</h3>
                    <p className="organistatie__paragraph">Het ontwikkelen en realiseren van maatschappelijke voorzieningen is binnen de gemeente Amsterdam in handen van team BMV: Bouwmanagement en Maatschappelijk Vastgoed, onderdeel van het Projectmanagementbureau. Bij BMV werken bouwmanagers en project- en procesmanagers, samen met collega’s van verschillende gemeentelijke afdelingen, aan de toekomst van de stad.</p>
                    <button className="organistatie__button">Meer Informatie</button>
                </li>
                <li className="organistatie__card">
                    <h3 className="organistatie__cardTitle">Bouwmanagement en Maatschappelijk Vastgoed</h3>
                    <p className="organistatie__paragraph">Het ontwikkelen en realiseren van maatschappelijke voorzieningen is binnen de gemeente Amsterdam in handen van team BMV: Bouwmanagement en Maatschappelijk Vastgoed, onderdeel van het Projectmanagementbureau. Bij BMV werken bouwmanagers en project- en procesmanagers, samen met collega’s van verschillende gemeentelijke afdelingen, aan de toekomst van de stad.</p>
                    <button className="organistatie__button">Meer Informatie</button>
                </li>
                <li className="organistatie__card">
                    <h3 className="organistatie__cardTitle">Bouwmanagement en Maatschappelijk Vastgoed</h3>
                    <p className="organistatie__paragraph">Het ontwikkelen en realiseren van maatschappelijke voorzieningen is binnen de gemeente Amsterdam in handen van team BMV: Bouwmanagement en Maatschappelijk Vastgoed, onderdeel van het Projectmanagementbureau. Bij BMV werken bouwmanagers en project- en procesmanagers, samen met collega’s van verschillende gemeentelijke afdelingen, aan de toekomst van de stad.</p>
                    <button className="organistatie__button">Meer Informatie</button>
                </li>
            </ul>
        </section>
    )
}

export default Organistatie;