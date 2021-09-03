import React, {useEffect} from 'react'
import Posts from '../services/Posts';
import Cart from '../components/Cart';
import { Button } from '@material-ui/core';

const ClasseSearch = ({match}) => {
    const classe = match.params.classe;
    const [statue , setStatue]  = React.useState("");
    const [posts , setPosts] = React.useState([]);
    useEffect(() => {
        Posts.searchClasse(classe ,setStatue , setPosts);
    }, [classe])
    if(posts !== undefined && statue.length ===0){
        return(
            <div>
                <ul>
                    {posts.map((post , key) => <li key = {key}><Cart title = {post.title} picture = {post.pictures} username = {post.username} link = {post.userLink} classe = {post.class} school = {post.school} links = {post.link}/></li>)}
                </ul>
            </div>
        );
    }else{
        return(
            <div>
                <p>{statue}</p>
                <Button variant = "contained" color = "primary" onClick = {() => window.location.href = "/"}>Retournez Au Marché</Button>
            </div>
        );
    }
}

export default ClasseSearch
