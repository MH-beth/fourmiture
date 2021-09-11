import React from 'react'
import { CLIENT } from '../constants'
import "./Footer.css";

const Footer = () => {
    const mention = `${CLIENT}/mentionlegal`;
    const about = `${CLIENT}/about`;
    return (
        <div>
            <br/><br/>
            <hr/>
            <div className = "Text">
            <br/><br/>
            <ul>
                <li><a href ={mention}>Mentions Légale</a></li>
                <li><a href = {about}>à Propos</a></li>
                <li><a href = "#">Condition D'utilisation</a></li>
                <li><a href = "#">Cookies</a></li>
                <li><a href = "#">Politique de Confidentialité</a></li>
                <br/>
                <li>Contact : contact.fourmiture@gmail.com</li>
                <br/>
                <li>Adresse : Casablanca, Maroc</li>
            </ul>
            <h6><br/>Copyright © 2021 Mouad Hajbaoui et Riad Biada Production. Tous droits réservés.</h6>
        </div>
        </div>
    )
}

export default Footer
