import axios from "axios";


let curr = async (location) => {
  const current =`http://api.weatherapi.com/v1/current.json?key=c9b13f3db6364503a04180031242504&q=${location}&aqi=no`;
  const options = { method: "GET", url: current };
  let response = await axios.request(options);
  return response.data
};

export default curr


