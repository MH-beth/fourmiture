import Axios from "axios";
import { API_URL, CLIENT } from "../constants";

class Reports {
    addReport(username , link, reason,setStatue){
        Axios.post(`${API_URL}/reportUser`, {username: username , link : link , reason : reason})
            .then(response => {
                (response.data.message) ?setStatue(response.data.message) : window.location.href = "/err";
            })
    }
}

export default new Reports();