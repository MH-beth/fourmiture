import { Button } from '@material-ui/core';
import React from 'react'
import "../assets/css/Card.css"

import {CLIENT} from "../constants";

const Card = (props) => {
    const url = `${CLIENT}/username/${props.link}`;
    return (
        <div className="card">
          <div className="card__body">
            <img src={props.picture} class="card__image" />
            <h2 className="card__title">{props.title}</h2>
            <p className="card__description"><a href = {url}>Auteur : {props.username}</a></p>
            <p className = "card__description">Disponibilité : {props.statue}</p>
            <p className = "card__description">Prix : {props.price} DHS</p>
            <p className = "card__description">Classe : {props.classe}</p>
            <p className = "card__description">Ecole : {props.school}</p>
          </div>
          <button onClick = {() => window.location.href = `${CLIENT}/post/${props.links}`}>Voir plus de details</button>
        </div>
    )
}

export default Card
