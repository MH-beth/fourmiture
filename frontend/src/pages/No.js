import React from 'react'
import Button from "@material-ui/core/Button";

const No = () => {
    return(
        <div>
          <p>"Vous N'avez Realiser Aucune Annonce !</p>
          <Button variant = "contained" color = "primary" onClick = {() => window.location.href = "/addPost"}>Faire Une Annonce</Button>
        </div>
      );
}

export default No