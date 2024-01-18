import './ProjectPage.scss'
import Navigation from "../Navigation/Navigation";
import jsonData from '../../data/data.json';
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function ProjectPages() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
    
    const location = useLocation();
    const myQuery  = location.search;
    let result = myQuery.slice(4);

    let newData = "";

    jsonData.projecten.forEach(card => {
        if(card.id == result){
            newData = card;
        }
    });

    const [currentIndex, setCurrentIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const handleNextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % newData.slider.length);
    };

    const handlePreviousSlide = () => {
        setCurrentIndex(prevIndex => ((prevIndex - 1) + newData.slider.length) % newData.slider.length);
    };

    const startAutomaticChange = () => {
        clearInterval(intervalId);
        setIntervalId(setInterval(handleNextSlide, 12000));
    };

    useEffect(() => {
        startAutomaticChange();

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return(
        <>
            <Navigation/>
            <header className="projectPage__banner" onMouseEnter={startAutomaticChange}>
                <figure className="projectPage__sliderContainer">
                    <img src={process.env.PUBLIC_URL + '/img/' + newData.slider[currentIndex].image} alt="" className="projectPage__sliderImage" />
                    <h2 className="projectPage__title">{newData.title}</h2>
                    <button className='projectPage__sliderButton--next' onClick={handlePreviousSlide}>&#x226A;</button>
                    <button className='projectPage__sliderButton--prev' onClick={handleNextSlide}>&#x226B;</button>
                </figure>
            </header>
            <section className="projectPage__textSection">
                <h2 className="projectPage__subTitle">{newData.subtitle}</h2>
                    <ul className="projectPage__textList">
                    {newData.text.map((card) => (
                        <li className="projectPage__textListItem">
                            <p className="projectPage__text">{card.text}</p>
                        </li>
                        ))}
                    </ul>
            </section>
        </>
    )
}