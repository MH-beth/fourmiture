import { Button, TextField } from '@material-ui/core';
import React from 'react'
import UpdateUser from '../../services/UpdateUser';

const UpdatePassword = ({username , setStatue , setCookies, cookies}) => {
    const password = cookies.password;
    const [newPassword, setNewPassword] = React.useState("");
    const [conf , setConf] = React.useState("");
    const [apassword , setPassword] = React.useState("")
    const handleSubmit = () => {
        if(apassword === password){
            if(conf === newPassword){
                UpdateUser.updatePassword(username ,newPassword , setStatue , setCookies )
            }else{
                setStatue("Veuillez confirmer vos mdps !")
            }
        }else{
            setStatue("Votre Mot de passe n'est pas correcte ! ")
        }
    }
    return (
        <div>
            <h1>Mot De Passe </h1>
            <br/>
            <TextField id = "standart-basic" label = "Votre Mot de Passe Actuelle : " onChange = {(e) => setPassword(e.target.value)}/>
            <br/>
            <TextField id = "standart-basic" label = "Nouveau Mots De passe : " onChange = {e => setNewPassword(e.target.value)}/>
            <br/>
            <TextField id = "standart-basic" label = "Confirmer Votre Nouveau Mot De Passe " onChange = {e => setConf(e.target.value)}/>
            <br/>
            {(apassword.length !== 0 && newPassword.length !== 0) ? <Button variant = "contained" color = "primary" onClick = {() => handleSubmit()}>Mettre à Jour</Button> : <Button variant = "contained" color = "primary" disabled>Mettre à Jour</Button>}
        </div>
    )
}

export default UpdatePassword
