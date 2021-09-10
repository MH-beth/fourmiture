import React from 'react'
import Button from "@material-ui/core/Button"

const Err = () => {
    return (
        <div>
            <h1>Une Erreur S'est Produite :| : </h1>
            <h2>Qu'est ce qui s'est passé : </h2>
            <p>On ne sait pas , nous vous proposons de reactualiser la page !</p>
            <Button variant = "contained" color = "primary" onClick = {() => window.location.href = "/"}>Retourner Au Marché</Button>
        </div>
    )
}

export default Err
    