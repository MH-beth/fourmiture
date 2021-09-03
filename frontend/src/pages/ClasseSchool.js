import { Button } from '@material-ui/core';
import React, {useEffect, useState} from 'react'
import Posts from '../services/Posts';
import Cart from "../components/Cart";

const ClasseSchool = ({match}) => {
    const classe = match.params.classe;
    const school = match.parames.school;
    const [posts , setPosts] = useState([]);
    const [statue , setStatue] = useState("");
    useEffect(() => {
        Posts.searchSchoolClasse(school , classe ,setPosts , setStatue);
    }, [classe , school])
    if(posts !== undefined && statue.length === 0){
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
                <Button variant = "contained" color = "primary" onClick = {() => window.location.href = "/"}>Retournée au marché</Button>
            </div>
        )
    }
}

export default ClasseSchool
