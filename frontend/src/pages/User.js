import axios from 'axios';
import React, {useEffect} from 'react'
import { API_URL } from '../constants';
import { CopyToClipboard } from "react-copy-to-clipboard"
import { Avatar, Button } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { useCookies } from 'react-cookie';

const User = ({match}) => {
    const url = match.params.link;
    const [cookies , setCookies] = useCookies(['user'])
    const [user , setUser] = React.useState({})
    useEffect(() => {
        axios.post(`${API_URL}/username/${url}`, {})
            .then(response => {
                if(response.data.message){
                    setUser(response.data.message);
                    console.log(response.data.message);
                }else{
                    window.location.href = "/NotFound";
                }
            })
    }, [url])
    if(user.username !== undefined){
        return(
            <div>
                <h1><Avatar alt = "photo de profile" src = {user.picture}/> {user.username}</h1>
                <p> id : {user.link} {(cookies.username === user.username) ? null : <Button variant = "contained" color = "primary" onClick = {() => window.location.href = `/report/${user.link}`}>Signaler</Button>}</p>
                <CopyToClipboard text = {user.link}>
                <Button variant = "contained" color = "primary" startIcon = {<FileCopyIcon/>}>Copier L'id</Button>
                </CopyToClipboard> 
                <h1>Moyens de contacts</h1>
                <ul>
                    <li>{user.email}</li>
                    <li>+212 {user.phone}</li>
                </ul>
                
                <p>Date de Creation : {user.creation}</p>
            </div>
        );
    }else{
        return(
            <div></div>
        );
    }
}

export default User
