import React, {useState} from 'react'
import { useCookies } from 'react-cookie'
import Posts from '../services/Posts'
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import EditIcon from '@material-ui/icons/Edit';
import { Button, TextField } from '@material-ui/core';
import UpdateSchool from '../components/update/UpdateSchool';
import UpadteTitle from '../components/update/UpadteTitle';
import UpdatePrice from "../components/update/UpdatePrice"
import UpdateClasse from '../components/update/UpdateClasse';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const Update = ({match}) => {
    const classes = useStyles();
    const [cookies , setCookies] = useCookies(['user'])
    const [posts , setPosts] = React.useState([]);
    const [statue , setStatue] = React.useState("");
    const [title , setTitle] = useState("");
    const [classe , setClasse] = useState("");
    const [prix , setPrix] = useState("");
    const [school , setSchool] = useState("");
    const [editSchool , setEditSchool] = useState(false)
    const [editTitle , setEditTitle] = useState(false);
    const [editPrice , setEditPrice] = useState(false);
    const [editClasse , setEditClasse] = useState(false);
    React.useEffect(() => {
        const link = match.params.link;
        const username = cookies.username;
        Posts.updatePost(username , link , setPosts ,setStatue )
    }, [cookies,match])
    if(posts !== undefined && statue.length === 0){
        return(
            <div>
                <h1>Annonce N°{posts.link}</h1>
                <br/>
                <p>Title : {posts.title} <Button variant = "contained" color = "primary" onClick = {() => setEditTitle(true)}><EditIcon/></Button></p>
                <br/>
                {(editTitle === true) ? <UpadteTitle setTitle = {setTitle} link = {posts.link} username = {cookies.username} setStatue = {setStatue} title = {title}/> : null}
                <br/>
                <p>Ecole : {posts.school} <Button variant = "contained" color = "primary" onClick = {()=>setEditSchool(true) }><EditIcon/></Button></p>
                
                {(editSchool ===true) ? <UpdateSchool link = {posts.link} school = {school} setSchool = {setSchool} setStatue = {setStatue}/> : null}
                <br/>
                
            <br/>
            <p>Classe :{posts.class} <Button variant = "contained" color = "primary" onClick = {() => setEditClasse(true)}><EditIcon/></Button></p>
            <br/>
            {(editClasse) ? <UpdateClasse username = {cookies.username} link = {posts.link} classe = {classe} setClasse = {setClasse}/> : null}
      <br/>
      <p>Prix : {posts.price} DHS <Button variant = "contained" color = "primary" onClick = {() =>setEditPrice(true)}><EditIcon/></Button></p>
      <br/>
      {(editPrice) ? <UpdatePrice username = {cookies.username} link = {posts.link} setPrice = {setPrix} price = {prix} setStatue ={setStatue}/> : null}
      <div className ="buttons">
            {(posts.title !== undefined && posts.title.length !== 0) ?  <Button variant = "contained" color = "primary" onClick = {() => Posts.setSold(cookies.username , posts.link , setStatue)}>Articles Vendu</Button> : null}
            {(posts.title !== undefined && posts.title.length !== 0) ? <Button variant = "contained" color = "secondary" onClick = {() => Posts.deleteUserPost(cookies.username , match.params.link,setStatue )}>Supprimer L'annonce</Button> : null}
      </div>
      <p>{statue}</p>
            </div>
        );
    }else{
        window.location.href = "/"
    }
}

export default Update
