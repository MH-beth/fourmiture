import React from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useCookies } from 'react-cookie';
import { Button } from '@material-ui/core';
import Reports from '../services/Reports';
import { generatekey } from '../logic/generateKey';
import CopyToClipboard from 'react-copy-to-clipboard';
import {CONNECTED} from "../constants";

const AddReport = ({match}) => {
    const [cookies , setCookies] = useCookies(['user']);
    const [reason , setReason] = React.useState("");
    const [statue , setStatue] = React.useState("");
    const [id , setId] = React.useState(generatekey());
    console.log(match.params.link);
    if(cookies.username && CONNECTED === "Connected"){
        return (
            <div>
                <h1>Vous Signalez l'utilisateur N° {match.params.link}</h1>
                <br/>
                <h1>Votre Identité sera la suivant durant le processuce : {cookies.username}</h1>
                <br/>
                <TextareaAutosize aria-label="minimum height" minRows={2} placeholder="La Raison" onChange = {e => setReason(e.target.value)} />
                <br/>
                <Button variant = "contained" color = "primary" onClick = {() => Reports.addReport(cookies.username , match.params.link , reason , setStatue, id)}>Signaler</Button>
                <div className = "statue">
                    <p>{statue}</p>
                </div> 
                {(statue.length !== 0) ? <p>Identifiant de la demande de signalement : {id}</p> : null}
                {(statue.length !== 0) ? <CopyToClipboard text = {id}><Button variant = "contained" color = "primary">Copier L'id de votre signalement</Button></CopyToClipboard> : null}
                {(statue.length !== 0 ) ? <Button variant = "contained" color = "primary" onClick = {() => window.location.href = "/reportsHistory"}>Historique des Signalement</Button> : null}
                {(statue.length !==0) ? <Button variant = "contained" color = "primary" onClick = {() => window.location.href = "/"}>Retournez au marché</Button> : null}
            </div>
        )
    }else{
        window.location.href = "/login";
    }
}

export default AddReport
