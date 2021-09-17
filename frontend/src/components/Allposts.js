import React , {useEffect, useState} from 'react'
import Posts from '../services/Posts'
import Axios from "axios"
import { API_URL } from '../constants';
import Cart from './Cart';
import Card from './Card';

const Allposts = () => {
    const [posts , setPosts] = useState();
    const [statue , setStatue] = useState("");
    useEffect(() => {
            Axios.post(`${API_URL}/seeAllPosts`, {})
                .then(response => {
                    if(response.data.message){
                        console.log(response.data.message);
                        setPosts(response.data.message)
                        console.log(response.data.message[0].creation)
                    }else{
                        setStatue(response.data.statue);
                    }
                })
    }, [])
    if(posts !== undefined && statue.length === 0){
        return(
            <div>
                <ul>
                    {posts.map((post , key) => <li key = {key}><Card title = {post.title} picture = {post.pictures} username = {post.username} link = {post.userLink} classe = {post.class} school = {post.school} links = {post.link} statue = {post.statue} price = {post.price} /></li>)}
                </ul>
            </div>
        );
    }else{
        return(
            <div>
                <p>{statue}</p>
            </div>
        )
    }
}

export default Allposts
