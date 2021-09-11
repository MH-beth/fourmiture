import React, {useState} from 'react'
import { useCookies } from 'react-cookie';
import EditIcon from '@material-ui/icons/Edit';
import Button from "@material-ui/core/Button"
import UpdateUsername from '../components/update/UpdateUsername';
import UpdateEmail from '../components/update/UpdateEmail';
import UpdatePassword from "../components/update/UpdatePassword";

const UpdateUser = () => {
    const [username , setUsername] = useState("");
    const [editEmail , setEditEmail] = useState(false);
    const [editUsername , setEditUsername] = useState(false);
    const [editPassword , setEditPassword] = useState(false);
    const [cookies , setCookies] = useCookies(['user']);
    const [statue , setStatue] = useState("");
    return (
        <div>
            <h1>Page de modification des informations de l'utilisateur</h1>
            <br/>
            <h1>Nom D'utilisateur : </h1>
            <br/>
            <p>{cookies.username} <Button variant = "contained" color = "primary" onClick = {() => setEditUsername(true)}><EditIcon/></Button></p>
            {(editUsername) ? <UpdateUsername username = {cookies.username} setStatue = {setStatue} setCookies = {setCookies}/> : null }
            <h1>Email</h1>
            <br/>
            <p>{cookies.email} <Button variant = "contained" color = "primary" onClick = {() => setEditEmail(true)}><EditIcon/></Button></p>
            <br/>
            {(editEmail) ? <UpdateEmail username = {cookies.username} setStatue = {setStatue}  setCookies = {setCookies}/> : null}
            <h1>Mot De Passe : </h1>
            <br/>
            <p>*********** <Button variant = "contained" color = "primary" onClick = {() => setEditPassword(true)}><EditIcon/></Button></p>
            <br/>
            {(editPassword) ? <UpdatePassword username = {cookies.username} setStatue = {setStatue} setCookies = {setCookies} cookies = {cookies}/> : null}
            <div className = "statue">
                <p>{statue}</p>
            </div>
        </div>
    )
}

export default UpdateUser
