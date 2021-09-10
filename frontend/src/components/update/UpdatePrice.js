import React from 'react'
import { TextField } from '@material-ui/core'
import Posts from '../../services/Posts'
import { Button } from '@material-ui/core'

const UpdatePrice = ({username , link , setPrice , price , setStatue}) => {
    return (
        <div>
            
            <TextField type = "Number" id ="standart-basic" label = "Modifier le Prix" onChange = {e => setPrice(e.target.value)}/>
            {(price.length !== 0) ? <Button variant = "contained" color =" primary" onClick = {() => Posts.updatePrice(username , link , price , setStatue)}>Mettre à Jour</Button> : <Button variant = "contained" color =" primary" disabled>Mettre à Jour</Button>}
        </div>
    )
}

export default UpdatePrice
