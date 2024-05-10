import axios from "axios";

let getData = async (location)=> {

    const entry = `http://api.weatherapi.com/v1/forecast.json?key=c9b13f3db6364503a04180031242504&q=${location}&days=4&aqi=yes&alerts=n`
    const options = {method: 'GET' , url: entry}
    let response = await axios.request(options)
    console.log(response.data)
    return response.data
}
export default getData;

