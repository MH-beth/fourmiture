import React from 'react'
import { useCookies } from 'react-cookie';
import { Button, TextField } from '@material-ui/core';
import Auth from "../services/Auth";
import emailjs from "emailjs-com"



const ConfirmEmail = () => {
    const [code , setCode] = React.useState("");
    const [statue , setStatue] = React.useState("");
    const [cookies , setCookies] = useCookies(['register']);
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.send('service_vus4dqh', 'template_9jcsx3a',{
            username: cookies.username,
            reply_to: cookies.email,
            }, 'user_FCQ62TmBeEBGLsPlHcW6B')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    const handleSubmit = (e) => {
        setCode("");
        e.preventDefault()
        if(code == cookies.id){
            Auth.register(e, cookies.username , cookies.firstname , cookies.lastname , cookies.password , cookies.email , cookies.phone , cookies.link , cookies.picture , setStatue, sendEmail);
        }else{
            setStatue(`Le code ne Correspond pas au code envoyer à votre email ${cookies.email}`);
        }
    }
    return (
        <div>
            <h1>Verification de Votre Adresse Mail {cookies.email} : </h1>
            <br/>
            <TextField id = "standart-basic"  label = "Code De Verification" onChange = {e => setCode(e.target.value)}/>
            {(code.length !== 6) ? <Button variant = "contained" color = "primary" disabled>Confirmer</Button> : <Button variant = "contained" color = "primary" onClick = {e => handleSubmit(e)}>Confirmer</Button>}
            <p>{statue}</p>
        </div>
    )
}

export default ConfirmEmail
