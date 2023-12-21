import React from "react";
import './ProjectPage.scss'
import Navigation from "../Navigation/Navigation";
import jsonData from '../../data/data.json';

export default function ProjectPages(props) {
    const searchParams = new URLSearchParams(window.location.search);
    const newId = searchParams.get('id');
    console.log(newId)

    jsonData.projecten.forEach(card => {
        if(card.id == newId){
            const newData = card;
            return newData;
        }
      });
    

    return(
        <>
        <Navigation/>
        <h2>hoi</h2>
        </>
    )
}