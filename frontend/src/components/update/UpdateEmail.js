import React from 'react'
import {Button , TextField} from "@material-ui/core"
import validator from 'validator'
import UpdateUser from "../../services/UpdateUser"


const UpdateEmail = ({username , setStatue, setCookies}) => {
    const [email , setEmail] = React.useState("");
    return (
        <div>
            <TextField id= "standart-basic" label = "Nouveau Email" onChange = {e => setEmail(e.target.value)}/>
            {(email.length !== 0) ? <Button variant = "contained" color = "primary" onClick = {() => {
                if(validator.isEmail(email)){
                    UpdateUser.checkEmailExistancy(username , email , setStatue,setCookies);
                }else{
                    setStatue("Veuillez saisir un email Valid");
                }
            }}>Mettre à Jour</Button> : <Button variant = "contained" color = "primary" disabled>Mettre à Jour</Button>}
        </div>
    )
}

export default UpdateEmail
