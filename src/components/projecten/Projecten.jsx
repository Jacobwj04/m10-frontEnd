import React from "react";
import './projecten.scss'
import jsonData from '../../data/data.json';
import { Link } from 'react-router-dom';

// const projectClicked = (id) => {
//     let newId = id
//     return(
//         <Link to={`/projectPage/${newId}`}>Go to My Page</Link>
//     )
// }

const Projecten = () => {
    return(
        <section className="projecten" id="projecten">
            <h2 className="projecten__title">Projecten</h2>
            <ul className="projecten__cards">
            {jsonData.projecten.map((card) => (
                <li className="projecten__card" id={card.id}>
                    <figure className="projecten__figure">
                        <img src={process.env.PUBLIC_URL + '/img/' + card.image} alt="" className="projecten__img" />
                        <h3 className="projecten__name">{card.title}</h3>
                    </figure>
                    <div className="projecten__buttonWrapper">
                        <Link to={`/projectPage?id=${card.id}`} className="projecten__button" >&#x226B;</Link>
                    </div>
                </li>
            ))}
            </ul>
        </section>
        
    )
}

{/* <button onClick={() => projectClicked(card.id)} className="projecten__button">&#x226B;</button> */}



export default Projecten;