import { Button, TextField } from '@material-ui/core';
import React from 'react'
import UpdateUser from '../../services/UpdateUser';

const UpdatePass = ({username , setStatue , setCookies}) => {
    const [newPassword, setNewPassword] = React.useState("");
    const [conf , setConf] = React.useState("");
    const [apassword , setPassword] = React.useState("")
    const handleSubmit = () => {
            if(conf === newPassword){
                UpdateUser.updatePassword(username ,newPassword , setStatue , setCookies )
            }else{
                setStatue("Veuillez confirmer vos mdps !")
            }
    }
    return (
        <div>
            <h1>Mettre à Jour Votre Mot De Passe </h1>
            <TextField id = "standart-basic" label = "Nouveau Mots De passe : " onChange = {e => setNewPassword(e.target.value)}/>
            <br/>
            <TextField id = "standart-basic" label = "Confirmer Votre Nouveau Mot De Passe " onChange = {e => setConf(e.target.value)}/>
            <br/>
            {(newPassword.length !== 0) ? <Button variant = "contained" color = "primary" onClick = {() => handleSubmit()}>Mettre à Jour</Button> : <Button variant = "contained" color = "primary" disabled>Mettre à Jour</Button>}
        </div>
    )
}

export default UpdatePass
