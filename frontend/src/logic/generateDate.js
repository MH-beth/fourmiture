import moment from "moment";
const currentTime = ({setDate}) =>{
    let d = new Date();
        // setting the current time !
        let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    if(h <10){
        h = '0' + h;
    }
    if(m<10){
        m = '0'+m;
    }
    if(s <10){
        s = '0'+s;
    }
// setting the time shower and all stuff
    let curentTime = `${h}:${m}:${s}`;
    console.log(curentTime);
    setDate(`${moment(new Date()).format("DD-MM-YYYY")} ${curentTime}`)
}
export default currentTime;
