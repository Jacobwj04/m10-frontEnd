import React from "react";
import './organistatie.scss'
import jsonData from '../../data/data.json';

let clicked = false;

const changeCardStyle = (id) => {
    let organistatieList = document.getElementById("organistatieList")

    if(clicked == true){
        for(let i = 0; i < organistatieList.children.length; i++){
            if(organistatieList.children[i].id == id){
                // let cardId = organistatieList.children[i].id;
                let card = document.getElementById(id);
                card.style.animationName = "Retract";
                card.style.animationDuration = "1.2s";
                card.style.flexDirection = '';
                card.style.flexWrap = '';
                let hiddenTextOne = card.children[2];
                let hiddenTextTwo = card.children[3];
                hiddenTextOne.style.display = '';
                hiddenTextTwo.style.display = '';
                let mainText = card.children[1];
                mainText.style.width = ""
                let cardButton = card.children[4];
                cardButton.innerText = "Meer Informatie";
            }else{
                setTimeout(function() {
                    organistatieList.children[i].style.display = "flex"
                    organistatieList.children[i].style.animationName = "FadeIn"
                    organistatieList.children[i].style.animationDuration = "0.4s"
                  }, 800);
            }
        }
    }
    if(clicked == false){
        for(let i = 0; i < organistatieList.children.length; i++){
            if(organistatieList.children[i].id == id){
                let card = document.getElementById(id);
                card.style.animationName = "Expand";
                card.style.animationDuration = "1.2s";
                card.style.flexDirection = 'row';
                card.style.flexWrap = 'wrap';
                let hiddenTextOne = card.children[2];
                let hiddenTextTwo = card.children[3];
                hiddenTextOne.style.display = 'block';
                hiddenTextOne.style.animationName = "FadeIn"
                hiddenTextTwo.style.display = 'block';
                hiddenTextTwo.style.animationName = "FadeIn"
                let mainText = card.children[1];
                mainText.style.width = "33%"
                let cardButton = card.children[4];
                cardButton.innerText = "Minder Informatie";
                clicked = true;
            }else{
                organistatieList.children[i].style.display = "none"
                organistatieList.children[i].style.animationDuration = "1.2s"
            }
        }
    }else{
        clicked = false;
    }
    console.log(clicked);

};

const Organistatie = () => {
    return(
        <section className="organistatie">
            <h2 className="organistatie__title">Organistatie</h2>
            <ul className="organistatie__cards" id="organistatieList">
            {jsonData.organistatieCards.map((card) => (
                <li className="organistatie__card" id={card.id}>
                    <header className="organistatie__header">
                        <h3 className="organistatie__cardTitle">{card.title}</h3>
                    </header>
                    <p className="organistatie__paragraph">{card.text}</p>
                    <article className="organistatie__hiddenTexts">
                        <p className="organistatie__paragraph">{card.hiddenTextOne}</p>
                        {card.list ? (
                            <ul className="organistatie__list">
                                 {card.listItems.map((card) => (
                                    <li className="organistatie__listItem">{card.text}</li>
                                 ))}
                            </ul>
                            ) : (
                            <p></p>
                        )}
                    </article>
                    <article className="organistatie__hiddenTexts">
                        <p className="organistatie__paragraph">{card.hiddenTextTwo}</p>
                    </article>
                    <button className="organistatie__button" onClick={() => changeCardStyle(card.id)}>Meer Informatie</button>
                </li>
            ))}
            </ul>
        </section>
    )
}

export default Organistatie;