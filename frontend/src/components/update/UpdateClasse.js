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

const UpdateClasse = ({username , link , classe , setClasse , setStatue}) => {
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
        <InputLabel id="demo-simple-select-label">Classe Scolaire</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={classe}
          onChange={e => setClasse(e.target.value)}
        >
        <MenuItem value="" disabled>
            Lycée
        </MenuItem>
          <MenuItem value="Terminal">Terminal</MenuItem>
          <MenuItem value="Première">Première</MenuItem>
          <MenuItem value="Seconde">Seconde</MenuItem>
          <MenuItem value="" disabled>
            Collège
        </MenuItem>
          <MenuItem value="Troisième">Troisième</MenuItem>
          <MenuItem value="Quatrième">Quatrième</MenuItem>
          <MenuItem value="Cinquième">Cinquième</MenuItem>
          <MenuItem value="Sixième">Sixième</MenuItem>
          <MenuItem value="" disabled>
            Primaire
        </MenuItem>
        <MenuItem value="CM2">CM2</MenuItem>
        <MenuItem value="CM1">CM1</MenuItem>
        <MenuItem value="CE2">CE2</MenuItem>
        <MenuItem value="CE1">CE1</MenuItem>
        <MenuItem value="CP">CP</MenuItem>
        </Select>
      </FormControl>
        {(classe.length !== 0) ? <Button variant = "contained" color = "primary" onClick = {() => Posts.updateClasse(username , link , classe , setStatue)}>Mettre à Jour</Button> : <Button variant = "contained" color = "primary" disabled>Mettre à Jour</Button> }
        </div>
    )
}

export default UpdateClasse
