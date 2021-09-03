import Axios from "axios";
import {API_URL} from "../constants";

class Auth {
    register(username , firstname , lastname , password , email , phone , link , picture , setStatue){
        Axios.post(`${API_URL}/register`, 
        {
            username : username ,
            password : password,
            firstname : firstname,
            lastname : lastname,
            email : email,
            phone : phone,
            link : link,
            picture  : picture,
        }).then(response => {
            if(response.data.message){
                setStatue(response.data.message)
                window.location.href = "/login";
            }else{
                window.location.href = "/err";
            }
        })
    }

    checkExistancy(username , firstname , lastname , password , email , phone , link , picture , setStatue){
        Axios.post(`${API_URL}/check`, {username : username , email : email , phone : phone})
            .then(response => {
                if(response.data.message){
                    this.checkBan(username , firstname , lastname , password , email , phone , link , picture , setStatue)
                }else{
                    setStatue(response.data.statue)
                }
            })
    }

    checkBan(username , firstname , lastname , password , email , phone , link , picture , setStatue){
        Axios.post(`${API_URL}/checkBan`, {username : username, email : email , phone : phone})
            .then(response => {
                if(response.data.message){
                    this.register(username , firstname , lastname , password , email , phone , link , picture , setStatue);
                }else{
                    setStatue(response.data.statue)
                }
            })
    }

    login(username , password , setStatue , setCookies){
        Axios.post(`${API_URL}/login`, {username : username , password : password})
            .then(response => {
                if(response.data.message){
                    setStatue("Connection : Succès");
                    const res = response.data.message;
                    sessionStorage.setItem("Connection-statue", "Connected");
                    setCookies("username", res.username , {path : "/"});
                    setCookies("password" , password ,  {path : "/"});
                    setCookies("firstname", res.firstname , {path : "/"});
                    setCookies("lastname", res.lastname , {path : "/"});
                    setCookies("email", res.email , {path : "/"});
                    setCookies("phone", res.phone , {path : "/"});
                    setCookies("link", res.link, {path : "/"});
                    setCookies("picture", res.picture , {path : "/"});
                    setCookies("creation", res.creation , {path : "/"});
                    setTimeout(() => window.location.href = "/", 1000);
                }else{
                    setStatue(response.data.statue)
                }
            })
    }

    checkLoginBan(username , password , setStatue , setCookies){
        Axios.post(`${API_URL}/checkBans`, {usrename : username})
            .then(response => {
                if(response.data.message){
                    this.login(username , password , setStatue , setCookies);
                }else{
                    setStatue(response.data.statue);
                }
            }
            )
    }

    logout(){
        sessionStorage.removeItem("Connection-statue");
        window.location.href = "/login";
    }
}
export default new Auth();