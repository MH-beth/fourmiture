import React, {useState} from 'react'
import { useCookies } from 'react-cookie'
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import EditIcon from '@material-ui/icons/Edit';
import { Button, TextField } from '@material-ui/core';
import Posts from '../../services/Posts';
const UpdateSchool = ({link ,school , setSchool, setStatue}) => {
    const [cookies , setCookies] = useCookies(['user']);
    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));
      const classes = useStyles();
    
    return (
        <div>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Etablissement Scolaire</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={school}
          onChange={e => setSchool(e.target.value)}
        >
        <MenuItem value="" disabled>
            Modifier Etablissement Scolaire(Optionelle)
        </MenuItem>
        <MenuItem value="Claude Monet">Claude Monet</MenuItem> 
        <MenuItem value="Georges Bizet">Georges Bizet</MenuItem>
        <MenuItem value="Claude Bernard">Claude Bernard</MenuItem>
        <MenuItem value="Théophile Gautier">Théophile Gautier</MenuItem>
        <MenuItem value="Molière">Molière</MenuItem>
        <MenuItem value="Ernest Renan">Ernest Renan</MenuItem>
        <MenuItem value="Anatole France">Anatole France</MenuItem>
        <MenuItem value="Lyautey">Lyautey</MenuItem>
        <MenuItem value="Al Jabr">Al Jabr</MenuItem>
        <MenuItem value="La Résidence">La Résidence</MenuItem>
        <MenuItem value="Ecole internationale de Casablanca ORT">Ecole internationale de Casablanca ORT</MenuItem>
        <MenuItem value="Léon l'Africain">Léon l'Africain</MenuItem>
        </Select>
      </FormControl>
      <br/>
      {(school.length !== 0 ) ? <Button variant ="contained" color = "primary" onClick = {() => Posts.updateSchool(cookies.username ,link , school , setStatue )}>Mettre à jour</Button> : <Button variant = "contained" color = "primary" disabled>Mettre à Jour</Button>}
        </div>
    )
}

export default UpdateSchool
