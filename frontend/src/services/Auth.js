import Axios from "axios";
import {API_URL} from "../constants";
import generateId from "../logic/generateId";
import emailjs from 'emailjs-com';

class Auth {
    register(e,username , firstname , lastname , password , email , phone , link , picture , setStatue, sendEmail){
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
                sessionStorage.removeItem("registerStatue");
                sendEmail(e);
                this.login(username , password , setStatue);
                setTimeout(() => window.location.href = "/", 3000);
            }else{
                window.location.href = "/err";
            }
        })
    }

    checkExistancy(e,username , firstname , lastname , password , email , phone , link , picture , setStatue, setCookies , setSub, sendEmail, setUsername, id){
        Axios.post(`${API_URL}/check`, {username : username , email : email , phone : phone})
            .then(response => {
                if(response.data.message){
                    this.checkBan(e,username , firstname , lastname , password , email , phone , link , picture , setStatue, setCookies , setSub,sendEmail, setUsername, id)
                }else{
                    setStatue(response.data.statue)
                }
            })
    }

    checkBan(e,username , firstname , lastname , password , email , phone , link , picture , setStatue, setCookies , setSub, sendEmail, setUsername, id){
        Axios.post(`${API_URL}/checkBan`, {username : username, email : email , phone : phone})
            .then(response => {
                if(response.data.message){
                        setSub(true)
                                setCookies("username", username , {path : "/"});
                                setCookies("firstname", firstname , {path : "/"});
                                setCookies("lastname", lastname , {path : "/"});
                                setCookies("password", password , {path : "/"});
                                setCookies("email", email, {path : "/"});
                                setCookies("phone", phone , {path : "/"});
                                setCookies("link", link , {path : "/"});
                                setCookies("picture", picture , {path : "/"});
                                setCookies("id", id , {path : "/"});
                                sendEmail(e);
                                setUsername("");
                                sessionStorage.setItem("registerStatue", "true");
                                setTimeout(() => window.location.href = "/confirmation/fynealnhwyqkrcrjtnasvqrjgqrvaklnmibgrpotsducjwtvyyt", 5000);
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
    checkExistancyChangePassword(username , setStatue , setCookies){
        const id = generateId();
        console.log(id);
        Axios.post(`${API_URL}/checkPass`, {username : username })
            .then(response => {
                if(response.data.message){
                    emailjs.send('service_vus4dqh', 'template_t860gvm',{
                        ids: id,
                        username: response.data.message.username,
                        code: id,
                        reply_to: response.data.message.email,
                        }, 'user_FCQ62TmBeEBGLsPlHcW6B')
                      .then((result) => {
                          console.log(result.text);
                      }, (error) => {
                          console.log(error.text);
                      });
                   setStatue("Un mail Vous à été envoyer a votre adresse mail !");
                   setCookies("username" , response.data.message.username , {path : "/"})
                   setCookies("Email" ,response.data.message.email , {path : "/"});
                   setCookies("code", id , {path : "/"});
                   sessionStorage.setItem("stay", "true")
                   setTimeout(() => window.location.href = "/forgetPassword/changePassword", 5000)
                }else{
                    setStatue("User Not Found");
                }
            })
    }
}
export default new Auth();