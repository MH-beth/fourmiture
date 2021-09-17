import { Button, TextField } from '@material-ui/core';
import React from 'react'
import { useCookies } from 'react-cookie';
import Auth from '../services/Auth';

const PasswordFor = () => {
    const [email , setEmail] = React.useState("");
    const [statue , setStatue] = React.useState("");
    const [cookies , setCookies] = useCookies(['forpass']);
    const handleSubmit = (e) => {
        e.preventDefault()
        Auth.checkExistancyChangePassword(email , setStatue , setCookies);
    }
    return (
        <div>
            <h1>Vous avez oublié Votre Mot de passe ?</h1>
            <p>Pas de panique ! Nous vous envoyerons un code a votre adresse mail !</p>
            <TextField id = "standart-basic" label = "Email" onChange = {(e) => setEmail(e.target.value)}/>
            <Button variant = "contained" color = "primary" onClick = {(e) =>handleSubmit(e)}>Envoyer Un Mail De verification</Button>
            <div className = "statue">
                <p>{statue}</p>
            </div>
        </div>
    )
}

export default PasswordFor
