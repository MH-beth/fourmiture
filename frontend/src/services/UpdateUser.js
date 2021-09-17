import Axios from "axios";
import {API_URL} from "../constants";


class UpdateUser {
    updateReportsUsername(username , newUsername){
        Axios.post(`${API_URL}/updateReportUsername`, {username : username ,  newUsername : newUsername})
            .then(response => {
                (response.data.statue) ? console.log(response.data.statue) : console.log(response.data.statue);
            })
    }

    updatePostsUsername(username , newUsername){
        Axios.post(`${API_URL}/updatePostsUsername`, {username : username , newUsername : newUsername})
            .then(response => {
            (response.data.statue) ? console.log(response.data.statue) : console.log(response.data.statue);
        })
    }

    updateComments(username , newUsername){
        Axios.post(`${API_URL}/updateCommentsUsername`, {username : username , newUsername : newUsername})
            .then(response => {
            (response.data.statue) ? console.log(response.data.statue) : console.log(response.data.statue);
        })
    }


    updateUsername(username , newUsername, setStatue, setCookies){
        Axios.post(`${API_URL}/usernameUpdate`, {username : username , newUsername : newUsername})
            .then(response => {
                if(response.data.message){
                    setStatue(response.data.message);
                    setCookies("username", newUsername, {path : "/"});
                }else{
                    window.location.href = "/err";
                } 
            })
    }
    
    checkUsernameExistancy(username , newUsername , setStatue, setCookies){
        Axios.post(`${API_URL}/checkUsername`, {username : newUsername})
            .then(response => {
                if(response.data.message){
                    this.updateUsername(username , newUsername , setStatue, setCookies);
                    this.updateReportsUsername(username , newUsername);
                    this.updatePostsUsername(username , newUsername);
                    this.updateComments(username , newUsername);
                }else{
                    setStatue(response.data.statue)
                }
            })
    }

    updateEmail(username , newEmail , setStatue, setCookies){
        Axios.post(`${API_URL}/updateEmail`, {email : newEmail, username : username})
            .then(response => {
                if(response.data.message){
                    setStatue(response.data.message);
                    setCookies("email", newEmail, {path : "/"});
                }else{
                    window.location.href = "/err"
                }
            })

    };

    checkEmailExistancy(username , newEmail , setStatue, setCookies){
        Axios.post(`${API_URL}/checkEmail`, {email : newEmail})
            .then(response => {
                if(response.data.message){
                    this.updateEmail(username , newEmail , setStatue, setCookies)
                }else{
                    setStatue(response.data.statue);
                }
            })
    }

    updatePassword(username , newPassword, setStatue, setCookies){
        Axios.post(`${API_URL}/updatePassword`, {username : username , password:  newPassword})
            .then(response => {
                if(response.data.message){
                    setStatue(response.data.message);
                    setCookies("password", newPassword , {path : "/"});
                }else{
                    window.location.href = "/err";
                }
            })
    }
}

export default new UpdateUser();