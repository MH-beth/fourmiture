import React, {useState} from 'react'
import { useCookies } from 'react-cookie'
import Posts from '../../services/Posts'
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import EditIcon from '@material-ui/icons/Edit';
import { Button, TextField } from '@material-ui/core';


const UpadteTitle = ({setTitle, link , username , setStatue, title}) => {
    return (
        <div>
        <TextField id = "standart-basic" label = "Modifier le Titre (Optionnel)" onChange = {e => setTitle(e.target.value)}/>
        {(title.length !== 0) ? <Button variant = "contained" color = "primary" onClick = {() => Posts.updateTitle(username , link , title , setStatue)}>Mettre A Jour</Button> : <Button variant = "contained" color = "primary" disabled>Mettre à Jour</Button>}
        </div>
    )
}

export default UpadteTitle
