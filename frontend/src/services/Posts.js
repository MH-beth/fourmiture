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

    //UNDONE ! 
    setSold(link , setStatue){
        Axios.post("/setSold", {link : link})
            .then(response => {
                if(response.data.message){
                    setStatue(response.data.message);
                }else{
                    window.location.href = "/err";
                }
            })
    }

}


export default new Posts();