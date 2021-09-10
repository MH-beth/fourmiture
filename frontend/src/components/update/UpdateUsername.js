import { TextField, Button } from '@material-ui/core'
import React from 'react'
import UpdateUser from '../../pages/UpdateUser'

const UpdateUsername = ({username, setStatue}) => {
    const [newusername , setUsername] =  React.useState("");
    return (
        <div>
            <TextField id = "standart-basic" label = "Nouveau Nom D'utilisateur" onChange = {e => setUsername(e.target.value)}/>
            <br/>
            {(newusername.length !== 0) ? <Button variant = "contained" color = "primary" onClick = {() => UpdateUser.updateUsername(username ,newusername , setStatue)}>Mettre A Jour</Button> : <Button variant = "contained" color = "primary" disabled>Mettre A Jour</Button>}
        </div>
    )
}

export default UpdateUsername
