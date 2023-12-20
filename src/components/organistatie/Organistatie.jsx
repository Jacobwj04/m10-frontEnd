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
                card.classList.add("organistatie__card--retract");
                card.classList.remove("organistatie__card--active")
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
                    organistatieList.children[i].classList.remove("organistatie__card--remove");
                    organistatieList.children[i].classList.add("organistatie__card--add");
                  }, 1000);
            }
        }
    }
    if(clicked == false){
        for(let i = 0; i < organistatieList.children.length; i++){
            if(organistatieList.children[i].id == id){
                let card = document.getElementById(id);
                organistatieList.children[i].classList.remove("organistatie__card--add");
                organistatieList.children[i].classList.remove("organistatie__card--remove");
                card.classList.remove("organistatie__card--retract");
                card.classList.add("organistatie__card--active")
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
                organistatieList.children[i].classList.remove("organistatie__card--add");
                organistatieList.children[i].classList.add("organistatie__card--remove");
            }
        }
    }else{
        clicked = false;
    }
    console.log(clicked);

};

const Organistatie = () => {
    return(
        <section className="organistatie" id="organistatie">
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