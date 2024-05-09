import axios from "axios";

let getDataf = async ()=> {

    const entryf = "http://api.weatherapi.com/v1/forecast.json?key=c9b13f3db6364503a04180031242504&q=London&days=4&aqi=yes&alerts=no"
    const optionsf = {method: 'GET' , url: entryf}
    let responsef = await axios.request(optionsf)
    console.log(responsef.data)
    return responsef.data
}
export default getDataf;