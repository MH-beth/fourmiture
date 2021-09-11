import { TextField, Button } from '@material-ui/core'
import React from 'react'
import UpdateUser from '../../services/UpdateUser'

const UpdateUsername = ({username, setStatue,setCookies}) => {
    const [newusername , setUsername] =  React.useState("");
    return (
        <div>
            <TextField id = "standart-basic" label = "Nouveau Nom D'utilisateur" onChange = {e => setUsername(e.target.value)}/>
            <br/>
            {(newusername.length !== 0) ? <Button variant = "contained" color = "primary" onClick = {() => UpdateUser.checkUsernameExistancy(username ,newusername , setStatue,setCookies)}>Mettre A Jour</Button> : <Button variant = "contained" color = "primary" disabled>Mettre A Jour</Button>}
        </div>
    )
}

export default UpdateUsername
