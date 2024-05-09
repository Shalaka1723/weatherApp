import axios from "axios";

let getData = async ()=> {

    const entry = "http://api.weatherapi.com/v1/current.json?key=c9b13f3db6364503a04180031242504&q=London&aqi=no"
    const options = {method: 'GET' , url: entry}
    let response = await axios.request(options)
    console.log(response.data)
    return response.data
}
export default getData;