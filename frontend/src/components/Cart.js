import React from 'react'
import {CLIENT} from "../constants";

const Cart = ({title, picture , username , link, classe , school, links, statue , price , date}) => {
    const url = `${CLIENT}/username/${link}`;
    const line = `${CLIENT}/post/${links}`;
    return (
        <div>
            <p>Date : {date.toString()}</p>
            <img src={picture} />
            <h2> <strong> <a href ={line}>{title} pour {classe}</a> </strong> </h2>
            <h3>{school}</h3>
            <h4>Date : {statue.toString}</h4>
            <h4>Prix : {price} DHS</h4>
            <h3><a href = {url}>{username}</a></h3>   
        </div>  
    )
}

export default Cart
