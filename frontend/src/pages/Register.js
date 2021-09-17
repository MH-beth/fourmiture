import { Avatar, Button, CircularProgress, TextField } from '@material-ui/core'
import React, {useState} from 'react'
import UploadImage from '../components/UploadImage';
import { generatekey } from '../logic/generateKey';
import Auth from '../services/Auth';
import generateId from '../logic/generateId';
import emailjs from 'emailjs-com';
import validator from "validator";
import { useCookies } from 'react-cookie';
import "../assets/css/Register.css";

const Register = () => {
    const [cookies , setCookies] = useCookies(['register']);
    const [id , setId] = React.useState(generateId());
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.send('service_vus4dqh', 'template_t860gvm',{
            ids: id,
            username: username,
            code: id,
            reply_to: email,
            }, 'user_FCQ62TmBeEBGLsPlHcW6B')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(password === conf){
            if(validator.isEmail(email)){
                if(username.length !== 0 && password.length !== 0){
                    if(firstname.length !== 0 && lastname.length !== 0){
                        if(validator.isMobilePhone(phone , "any")){
                            Auth.checkExistancy(e,username , firstname , lastname , password , email , phone , link , picture , setStatue, setCookies , setSub, sendEmail, setUsername, id);
                            }
                        else{
                            setStatue("Merci de spécifier U numéro de telephone Valide ! ")
                        }
                    }else{
                        setStatue("Merci De bien spécifier votre prenom et votre nom")
                    }
                }else{
                    setStatue("Merci De bien Remplir tout les champs")
                }
            }else{
                setStatue("Merci de Bien Specifier une Adresse Mail Valide");
            }
        }else{
            setStatue("Les Mot de passe Doivent être les même");
        }
    }
    const [firstname , setFirstname] = useState("");
    const [lastname , setLastname] = useState("");
    const [username , setUsername ] = useState("");
    const [password , setPassword] = useState("");
    const [conf , setConf] = useState("");
    const [sub , setSub] = useState(false)
    const [email , setEmail] = useState("")
    const [statue , setStatue] = useState("");
    const [phone , setPhone] = useState("");
    const [link , setLink] = useState(generatekey());
    const [picture , setPicture] = useState("https://firebasestorage.googleapis.com/v0/b/mycars-rent.appspot.com/o/images%2Fblank-profile-picture-973460_1280%20(1).png?alt=media&token=1620c234-bf80-409b-9893-d8c46c911715");
    return (
        <div>
            <div className = "data">
            <h1>Rejoignez Fourmiture Dés Maintenant</h1>
            <p>Votre Id : {link}</p>
            </div>
            <div className = "register">
            <div className = "name">
            <TextField id = "standart-basic" label  ="Prénom" onChange = {(e) => setFirstname(e.target.value)}/>
            <TextField id = "standart-basic" label  ="Nom" onChange = {(e) => setLastname(e.target.value)}/>
        </div>
        <TextField id = "standart-basic" label  ="Nom D'Utilisateur" onChange = {(e) => setUsername(e.target.value)}/>
        <br/>
        <div className = "pass">
        <TextField id = "standart-basic" type="password" label  ="Mot de passe" onChange = {(e) => setPassword(e.target.value)}/>
        <TextField id = "standart-basic" type="password" label  ="Confirmez Votre Mot de passe" onChange = {(e) => setConf(e.target.value)}/>
        <br/>
        </div>
        <TextField id = "standart-basic" label  ="Email" onChange = {(e) => setEmail(e.target.value)}/>
        <br/>
        <TextField id = "standart-basic" type ="number" label  ="Telephone (+212)" onChange = {(e) => setPhone(e.target.value)}/>
        <br/>
        <Avatar alt = "Photo de profile" src = {picture} size = "medium"/>
        <UploadImage setPicture = {setPicture} title = "Photo De Profile"/>
        <br/>
        <Button variant = "contained" color = "primary" onClick = {(e) => handleSubmit(e)}>S'inscrire</Button>
        <div className = "statue">
            <p>{statue}</p>
        </div>
        <div>
            {(sub) ? <CircularProgress/> : null}
        </div>
            </div>
        </div>
    )
}

export default Register
