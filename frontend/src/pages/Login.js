import { Button, TextField } from '@material-ui/core';
import React, {useState} from 'react'
import { useCookies } from 'react-cookie';
import Auth from '../services/Auth';

const Login = () => {
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [statue , setStatue] = useState("")
    const [cookies , setCookies] = useCookies(['user']);

    const handleSubmit = e => {
        e.preventDefault();
        Auth.checkLoginBan(username , password , setStatue , setCookies);
    }

    return (
        <div>
            <h1>Connectez Vous à Votre Compte Fourmiture : </h1>
            <br/> 
            <TextField id = "standart-basic"  label = "Nom D'utilisateur" onChange = {e => setUsername(e.target.value)}/>
            <TextField id = "standart-basic" type="password" label = "Password" onChange = {e => setPassword(e.target.value)}/>    
            <Button varaint = "contained" color = "primary" onClick = {(e) => handleSubmit(e)}>Se Connecter</Button>
            <div className = "statue">
                <p>{statue}</p>
            </div>
        </div>
    )
}

export default Login
