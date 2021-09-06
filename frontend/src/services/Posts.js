import Axios from "axios";
import {API_URL} from "../constants";
import { generatekey } from "../logic/generateKey";

class Posts {
    addPost(username, userLink , title , texte , picture , price , classe ,school, link , setStatue){
        Axios.post(`${API_URL}/addPost`, 
        {
            username : username,
            userLink : userLink,
            title : title,
            texte : texte,
            picture : picture,
            price : price , 
            school : school,
            classe : classe,
            link : generatekey()
        }).then(response => {
            if(response.data.message){
                setStatue(response.data.message);
            }else{
                window.location.href = "/err";
            }
        })
    }

    seeAllPosts(setPosts, setStatue){
        Axios.post(`${API_URL}/seeAllPosts`, {})
            .then(response => {
                if(response.data.message){
                    console.log(response.data.message);
                    setPosts(response.data.message)
                }else{
                    setStatue(response.data.statue);
                }
            })
    }

    searchClasse(classe , setStatue , setPosts){
        Axios.post(`${API_URL}/search/classe`, {classe : classe})
            .then(response => {
                if(response.data.message){
                    setPosts(response.data.message);
                }else{
                    setStatue(response.data.statue);
                }
            })
    }

    searchSchool(school , setPosts , setStatue){
        Axios.post(`${API_URL}/search/school`, {school : school})
            .then(response=> {
                if(response.data.message){
                    setPosts(response.data.message);
                }else{
                    setStatue(response.data.statue)
                }
            })
    }

    searchSchoolClasse(school , classe , setPosts , setStatue){
        Axios.post(`${API_URL}/search/school/classe`, {school : school , classe : classe})
            .then(response => {
                if(response.data.message){
                    setPosts(response.data.message);
                }else{
                    setStatue(response.data.statue);
                }
            })
    }

    userPosts(username , setPosts , setStatue){
        Axios.post(`${API_URL}/userPosts`, {username : username})
            .then(response => {
                if(response.data.message){
                    setPosts(response.data.message);
                }
            })
    }

    deleteUserPost(username , link , setStatue){
        Axios.post(`${API_URL}/deletePost`, {username : username , link : link})
            .then(response => {
                (response.data.message) ? setStatue(response.data.message) : window.location.href = "/err";
            })
    }

    updatePost(username , link , setPosts , setStatue){
        Axios.post(`${API_URL}/updateInfo`, {username : username , link : link})
            .then(response => {
                if(response.data.message){
                    setPosts(response.data.message)
                }else{
                    setStatue(response.data.statue)
                }
            })
    }

    updateSchool(username , link , school , setStatue){
        Axios.post(`${API_URL}/updateSchool`, {username : username , link : link , school : school})
            .then(response => {
                if(response.data.message){
                    setStatue(response.data.message);
                }else{
                    window.location.href = "/postsHistory";
                }
            })
    }

    updateTitle(username , link , title , setStatue){
        Axios.post(`${API_URL}/updateTitle`, {username : username , link : link , title : title})
            .then(response => {
                if(response.data.message){
                    setStatue(response.data.message);
                }else{
                    window.location.href = "/err";
                }
            })
    }

    updatePrice(username , link , price , setStatue){
        Axios.post(`${API_URL}/updatePrice`, {username : username , link : link , price : price})
            .then(response => {
                (response.data.message) ? setStatue(response.data.message) : window.location.href = "/err";
            })
    }

    updateClasse(username , link , classe , setStatue){
        Axios.post(`${API_URL}/updateClasse`, {username : username , link : link , classe : classe})
            .then(response => {
                (response.data.message) ? setStatue(response.data.message) : window.location.href = "/err";
            })
    }

    setSold(username , link , setStatue){
        Axios.post(`${API_URL}/sold`, {username : username , link : link})
            .then(response => {
                (response.data.message) ? setStatue(response.data.message) : window.location.href = "/err";
            })
    }

    addComment(username , link , comment , setStatue){
        Axios.post(`${API_URL}/addComment`, {username : username , link : link , comment : comment})
            .then(response => {
                if(response.data.message){
                    setStatue(response.data.message)
                    setTimeout(() => window.location.reload(), 1000);
                }else{
                    window.location.href = "/err";
                }
            })
    }

    seeAllComments(link , setStatue , setPosts){
        Axios.post(`${API_URL}/seeComment`, {link : link})
            .then(response => {
                if(response.data.message){
                    setPosts(response.data.message);
                }else{
                    setStatue(response.data.statue)
                }
            })
    }

}


export default new Posts();