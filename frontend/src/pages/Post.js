import axios from 'axios';
import React, {useEffect} from 'react'
import {API_URL, CLIENT} from "../constants"

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
                <p><a href={userLink}>{post.username}</a></p>
                <p>{post.statue} : {post.title} Pour la Classe {post.class}</p>
                <p>{post.texte}</p>
                <p>{post.price} DHS</p>
                <h2>Photo du produit : </h2>
                <img src = {post.pictures} alt = "image"></img>
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
