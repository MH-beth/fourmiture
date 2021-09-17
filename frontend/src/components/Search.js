import React , {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { CLIENT } from '../constants';
import "../assets/css/Search.css"

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Search = () => {
    const classes = useStyles();
    const [classe , setClasse] = useState("");
    const [school , setSchool] = useState("");
    const handleChange = (event) => {
        setClasse(event.target.value);
      };
      const handleChanges = (event) => {
        setSchool(event.target.value);
      };

      const handleSubmit = e => {
          e.preventDefault();
          if(classe.length !== 0 && school.length !== 0){
            window.location.href = `/search/all/${school}/${classe}`;
          }
          if(school && !classe){
            window.location.href = `/search/school/${school}`
            console.log(school)
          }
          if(classe.length !== 0 && school.length === 0){
            window.location.href = `/search/classe/${classe}`
          }else{
              console.log("else statement")
          }
      }
    return (
        <div className = "main">
        <h1>Rechercher selon vos Critères ! </h1>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Classe Scolaire</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={classe}
          onChange={handleChange}
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
      <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">Etablissement Scolaire</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={school}
        onChange={handleChanges}
      >
      <MenuItem value="" disabled>
          Etablissement Scolaire
      </MenuItem>
      <MenuItem value="" selected>Toutes les écoles du réseau aefe</MenuItem>
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
        <MenuItem value="Terminal">Terminal</MenuItem>
        <MenuItem value="Première">Première</MenuItem>
        <MenuItem value="Seconde">Seconde</MenuItem>
      </Select>
    </FormControl>
    <br/>
      <Button variant = "contained" color = "primary" onClick = {(e) => handleSubmit(e)}><SearchIcon/></Button>
        </div>
    )
}

export default Search
