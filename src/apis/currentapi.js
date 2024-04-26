import axios from "axios";

const current =
  "http://api.weatherapi.com/v1/current.json?key=c9b13f3db6364503a04180031242504&q=London&aqi=no";
const options = { method: "GET", url: current };

 let curr = async (location) => {
  let response = await axios.request(options);
  console.log(response.data);
};
export default curr