import axios from 'axios';
import React, {useEffect} from 'react'
import AddComment from '../components/AddComment';
import SeeComment from '../components/SeeComment';
import {API_URL, CLIENT, CONNECTED} from "../constants"

const Post = ({match}) => {
    const [post , setPost] = React.useState({});
    const link = match.params.link;
    useEffect(() => {
        axios.post(`${API_URL}/post/${link}`, {})
            .then(response => {
                if(response.data.message){
                    setPost(response.data.message);
                }else{
                    window.location.href ="/NotFound"
                }
            })
    }, [link])
    if(post.title !== undefined){
        const userLink = `${CLIENT}/username/${post.userLink}`
        return(
            <div>
                <p>date :{post.creation} </p>
                <p><a href={userLink}>{post.username}</a></p>
                <p>{post.statue} : {post.title} Pour la Classe {post.class}</p>
                <p>{post.texte}</p>
                <p>{post.price} DHS</p>
                <h2>Photo du produit : </h2>
                <img src = {post.pictures} alt = "image"></img>
                <h1>Section Commentaire : </h1>
                {(CONNECTED === "Connected") ? <AddComment link = {link}/> : null}
                <br/>
                <SeeComment link = {link}/>

            </div>
        );
    }else{
        return(
            <div>
                <p>Hello</p>
            </div>
        );
    }

}

export default Post
