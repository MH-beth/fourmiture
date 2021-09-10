import Axios from "axios";
import { API_URL, CLIENT } from "../constants";

class Reports {
    addReport(username , link, reason,setStatue, id){
        Axios.post(`${API_URL}/reportUser`, {username: username , link : link , reason : reason, id :id})
            .then(response => {
                (response.data.message) ?setStatue(response.data.message) : window.location.href = "/err";
            })
    }

    seeAllReports(username , setReports , setStatue){
        Axios.post(`${API_URL}/reportHistory`, {username : username})
            .then(response => {
                (response.data.message) ? setReports(response.data.message) : setStatue(response.data.statue);
            })
    }
}

export default new Reports();