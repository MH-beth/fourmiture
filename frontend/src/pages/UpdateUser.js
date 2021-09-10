import React, {useState} from 'react'
import { useCookies } from 'react-cookie';
import EditIcon from '@material-ui/icons/Edit';
import Button from "@material-ui/core/Button"
import UpdateUsername from '../components/update/UpdateUsername';

const UpdateUser = () => {
    const [username , setUsername] = useState("");
    const [editUsername , setEditUsername] = useState(false);
    const [cookies , setCookies] = useCookies(['user']);
    return (
        <div>
            <h1>Page de modification des informations de l'utilisateur</h1>
            <br/>
            <h1>Nom D'utilisateur : </h1>
            <br/>
            <p>{cookies.username} <Button variant = "contained" color = "primary" onClick = {() => setEditUsername(true)}><EditIcon/></Button></p>
            {(editUsername) ? <UpdateUsername/> : null }
        </div>
    )
}

export default UpdateUser
