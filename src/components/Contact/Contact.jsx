import './contact.scss';
import jsonData from '../../data/data.json';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Contact() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
      
    return(
        <section className="contact">
            <h2 className="contact__title">Contact</h2>
            <article className="contact__main">
                <section className="contact__wrapper">
                <ul className="contact__list">
                    <li className="contact__listItem">
                        <h3 className="contact__subTitle">Bezoekadres</h3>
                        <p className="contact__info">Weesperstraat 432</p>
                        <p className="contact__info">1018 DN Amsterdam</p>
                        <div className="contact__linkWrapper">
                            <img className="contact__img" src={process.env.PUBLIC_URL + '/img/email.png'} alt="" />
                            <a href="mailto:info.pmb@amsterdam.nl" className="contact__eamil">info.pmb@amsterdam.nl</a>
                        </div>
                    </li>
                    <li className="contact__listItem">
                        <h3 className="contact__subTitle">Postadres</h3>
                        <p className="contact__info">Postbus 1269</p>
                        <p className="contact__info">1000 BG Amsterdam</p>
                    </li>
                    <li className="contact__listItem">
                        <h3 className="contact__subTitle">Informatie over inhuur</h3>
                        <p className="contact__info">Neem contact op met Dilia Schouten van de afdeling Markt en Capaciteit:</p>
                        <div className="contact__linkWrapper">
                            <img className="contact__img" src={process.env.PUBLIC_URL + '/img/email.png'} alt="" />
                            <a href="mailto:d.schouten@amsterdam.nl" className="contact__eamil">d.schouten@amsterdam.nl</a>
                        </div>
                    </li>
                </ul>
                </section>
                <section className="contact__wrapper">
                    <iframe className="contact__map" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2436.423995380947!2d4.9067104!3d52.3627315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTLCsDIxJzQ1LjgiTiA0wrA1NCcyNC4yIkU!5e0!3m2!1sen!2snl!4v1705053014688!5m2!1sen!2snl" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </section>
            </article>
        </section>
    )
}