import React from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useCookies } from 'react-cookie';
import { Button } from '@material-ui/core';
import Reports from '../services/Reports';

const AddReport = ({match}) => {
    const [cookies , setCookies] = useCookies(['user']);
    const [reason , setReason] = React.useState("");
    const [statue , setStatue] = React.useState("");
    console.log(match.params.link);
    return (
        <div>
            <h1>Vous Signalez l'utilisateur N° {match.params.link}</h1>
            <br/>
            <h1>Votre Identité sera la suivant durant le processuce : {cookies.username}</h1>
            <br/>
            <TextareaAutosize aria-label="minimum height" minRows={2} placeholder="La Raison" onChange = {e => setReason(e.target.value)} />
            <br/>
            <Button variant = "contained" color = "primary" onClick = {() => Reports.addReport(cookies.username , match.params.link , reason , setStatue)}>Signaler</Button>
            <div className = "statue">
                <p>{statue}</p>
            </div> 
            {(statue.length !==0) ? <Button varaint = "contained" color = "primary" onClick = {() => window.location.href = "/"}>Retournez au marché</Button> : null}
        </div>
    )
}

export default AddReport
