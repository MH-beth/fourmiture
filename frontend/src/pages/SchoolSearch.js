import React , {useEffect} from "react";
import Cart from "../components/Cart";
import Posts from "../services/Posts";
import {Button} from "@material-ui/core";

const SchoolSearch = ({match}) => {
    const [statue , setStatue] = React.useState("");
    const [posts , setPosts] = React.useState([]);
    useEffect(() => {
        const url = match.params.school;
        Posts.searchSchool(url , setPosts , setStatue);
    }, [match])

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
                <br/>
                <Button variant = "contained" color = "primary" onClick = {() => window.location.href = "/"}>Revenir à La Page Principal</Button>
            </div>
        );
    }
}

export default SchoolSearch;