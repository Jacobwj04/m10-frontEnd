import React from "react";
import './ProjectPage.scss'
import Navigation from "../Navigation/Navigation";
import jsonData from '../../data/data.json';

export default function ProjectPages(props) {
    const searchParams = new URLSearchParams(window.location.search);
    const newId = searchParams.get('id');

    return(
        <>
        <Navigation/>
        {jsonData.projecten.map((card) => (
            <>
            {
              newId === card.id
              ? <p>Variables are the same</p>
                
              : <p>{card.id}</p>
            }
          </>
        ))}
        </>
    )
}