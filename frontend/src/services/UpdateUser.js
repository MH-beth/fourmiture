import Axios from "axios";
import {API_URL} from "../constants";


class UpdateUser {
    updateUsername(username , newUsername, setStatue){
        Axios.post(`${API_URL}/updateUsername`, {username : username , newUsername : newUsername})
            .then(response => {
                (response.data.message) ? setStatue(response.data.message) : window.location.href = "/err";
            })
    }
}

export default new UpdateUser();