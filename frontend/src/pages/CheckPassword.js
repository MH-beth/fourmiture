import React from 'react'
import { useCookies } from 'react-cookie';
import {TextField , Button} from "@material-ui/core";
import UpdatePassword from '../components/update/UpdatePassword';
import UpdatePass from '../components/update/UpdatePass';

const CheckPassword = () => {
    const [code , setCode] = React.useState(null);
    const [changePassword , setChangePassword] = React.useState(false);
    const [pass , setPass] = React.useState(true);
    const [cookies , setCookies] = useCookies(['forpass']);
    const [statue , setStatue] = React.useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(code == cookies.code){
            setChangePassword(true);
            setPass(true)
        }else{
            setStatue("Le code envoyé a votre Email est different ! ")
        }
    }
    return (
        <div>
            <h1>Verification de votre identité</h1>
            {(pass) ? <div><TextField id = "standart-basic" label = "Code De Vérification" onChange = {(e) => setCode(e.target.value)}/>
            <Button variant = "contained" color = "primary" onClick = {(e) => handleSubmit(e)}>Verifié le code</Button></div> : null}
            {(changePassword) ? <UpdatePass username = {cookies.username} setStatue = {setStatue} setCookies = {setCookies}/> : null}
            <p>{statue}</p> 
            {(statue.length !== 0) ? <Button variant = "contained" color = "primary" onClick = {() => window.location.href = "/"}>Retourner Au Marché</Button> : null}
        </div>
    )
}

export default CheckPassword
