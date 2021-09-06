import { Avatar, Button, TextField } from '@material-ui/core';
import React, {useState} from 'react'
import { useCookies } from 'react-cookie'
import UploadImage from '../components/UploadImage';
import { generatekey } from '../logic/generateKey';
import Posts from '../services/Posts';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AddPost = () => {
    const classes = useStyles();
    const [cookies , setCookies] = useCookies(['user']);
    const [title , setTitle] = useState("");
    const [texte , setTexte] = useState("");
    const [picture , setPicture] = useState("https://firebasestorage.googleapis.com/v0/b/mycars-rent.appspot.com/o/images%2Fdepositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg?alt=media&token=e0c85312-597a-475e-9732-8d7aaccea770");
    const [price , setPrice] = useState("");
    const [classe , setClasse] = useState("");
    const [link , setLink] = useState(generatekey());
    const [statue , setStatue] = useState("");
    const [school , setSchool] = useState("");
    const handleSubmit = e => {
        console.log(cookies.link + " " + cookies.username);
        if(title.length !==0 && texte.length !== 0){
            if(price.length !== 0){
                if(classe.length !== 0){
                  console.log(link);
                    Posts.addPost(cookies.username , cookies.link , title , texte , picture , price , classe ,school, link , setStatue);
                    setTitle("");
                    setTexte("");
                    setPicture("");
                    setPrice("");
                    setClasse("");
                    setSchool("");
                    setTimeout(() => window.location.href = "/", 2000);
                }else{
                    setStatue("Merci de spécifier une classe");
                }
            }else{
                setStatue("Merci de remplir Un Prix Valable")
            }
        }else{
            setStatue("Veuillez remplir tout les champs")
        }
    }
    const handleChange = (event) => {
        setClasse(event.target.value);
      };
      const handleChanges = (event) => {
        setSchool(event.target.value);
      };
    return (
        <div>
            <h1>Ajouter Votre Annonce à partir de maintenant et gratuitement : </h1>
            <br/>
            <TextField id = "standart-basic" label = "Titre" onChange = {e => setTitle(e.target.value)}/>
            <TextField id = "standart-basic" label = "Texte Descriptif" onChange = {e => setTexte(e.target.value)}/>
            <TextField id = "standart-basic" type="number" label = "Prix" onChange = {e => setPrice(e.target.value)}/>
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
            <Avatar alt = "Picture" src = {picture}/>
            <br/>
            <UploadImage setPicture = {setPicture} title = "Photo de Votre Article"/>
            <br/>
            <Button variant = "contained" color = "primary" onClick = {() => handleSubmit()}>Poster</Button>
            <div className = "statue">
                <p>{statue}</p>
            </div>
        </div>
    )
}

export default AddPost
