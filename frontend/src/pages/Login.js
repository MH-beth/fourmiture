import { Button, TextField } from '@material-ui/core';
import React, {useState} from 'react'
import { useCookies } from 'react-cookie';
import Auth from '../services/Auth';
import Recaptcha from "react-recaptcha";

const Login = () => {
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [statue , setStatue] = useState("")
    const [cookies , setCookies] = useCookies(['user']);
    const [ip , setIp] = useState(null);
    const [state , setState] = useState({verified : false})

    const handleSubmit = e => {
        e.preventDefault();
        if(state.verified){
            Auth.checkLoginBan(username , password , setStatue , setCookies);
        }else{
            setStatue("Es Tu un Robot ? Veuillez valider le Recaptcha")
        }
    }

    React.useEffect(() => {
        fetch("https://geolocation-db.com/json/ac71b0c0-1248-11ec-b75e-4962cc3311c9")
            .then(response => response.json())
            .then(data => setIp(data.IPv4))
    }, [])

    const captchaLoaded = ()=>{
        console.log("All Good Capctha")
    }
    const verifyCallback = (response) =>{
        if(response){
            setState({verified : true})
        }
    }

    return (
        <div>
            <h1>Connectez Vous à Votre Compte Fourmiture : </h1>
            <h1>Votre Ip : {ip}</h1>
            <br/> 
            <TextField id = "standart-basic"  label = "Nom D'utilisateur" onChange = {e => setUsername(e.target.value)}/>
            <TextField id = "standart-basic" type="password" label = "Password" onChange = {e => setPassword(e.target.value)}/>
            <br/>
            <Recaptcha
            sitekey="6LfXq14cAAAAAO7xaq1vYxdyeJVmcsBKh61Tkm6I"
            render="explicit"
            onloadCallback={captchaLoaded}
            verifyCallback = {verifyCallback}
            theme="dark"
            />    
            <Button variant = "contained" color = "primary" onClick = {(e) => handleSubmit(e)}>Se Connecter</Button>
            <div className = "statue">
                <p>{statue}</p>
            </div>
        </div>
    )
}

export default Login
