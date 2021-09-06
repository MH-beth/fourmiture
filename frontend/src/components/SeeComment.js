import React, {useEffect, useState} from 'react'
import Posts from '../services/Posts';
import Comment from "./Comment";

const SeeComment = ({link}) => {
    const [posts , setPost] = useState([]);
    const [statue , setStatue] = useState("");
    useEffect(() => {
        Posts.seeAllComments(link , setStatue , setPost);
    }, [link])
    if(posts !== undefined && statue.length === 0){
        return(
            <div>
                {posts.map(post => <Comment username = {post.username} texte = {post.comment}/>)}
            </div>
        );
    }else{
        return(
            <div>
                <p>{statue}</p>
            </div>
        );
    }
}

export default SeeComment
