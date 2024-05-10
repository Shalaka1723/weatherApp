import React, { useEffect } from "react";
import { LineChart } from '@mui/x-charts/LineChart';
import { useState } from "react";
import getData from "../apis/forecastapi";
import Fcard from "./Fcard";


const WeatherApp = () => {

    const [ location, setLocation ] = useState("Mumbai")
    const[data,setData] = useState("")
    let getter =()=>{
        getData(location).then((result)=>{
            setData(result)
        })
    }

    useEffect(() => {
        getter(location)
    },[location])
    
    console.log(data)
    console.log(data.forecast)

    let fcast= data?.forecast?.forecastday


    return (
    
    <div className=" bg-blue-50 h-screen w-screen align-middle p-14 flex justify-center"> 
      <div className="flex flex-col h-fit justify-center rounded-lg shadow-lg shadow-slate-600  bg-white p-8 w-fit items-center">
      <h1 className=" text-4xl font-bold text-cyan-500 border-cyan-500">Mycity Weather Forecast</h1>

      <div id="mainContainer" className="flex flex-row ">
      

                <div id="leftContainer" className="flex flex-col p-10 gap-8 items-center content-center">
                        
                        <div>  
                            <h1>Your city</h1>
                            <input type="text" value={location}  onChange={(e)=>{setLocation(e?.target?.value)}} placeholder="Type City Name" className="pl-2 py-1 ml-2 border-2 rounded-md" />
                        </div>
                        <a className='text-gray-500'>{data?.location?.name}</a>
                        <div className=" text-5xl font-semibold"> 
                        <img src={data?.forecast?.forecastday[0]?.day?.condition?.icon} className=" " />
                            <h1> {data?.current?.temp_c}°C</h1>
                        </div>
                        <h1 className=" text-3xl font-bold">{data?.current?.condition?.text}</h1>


                        <div className="flex flex-row gap-10 text-gray-400">
                            <div>
                                <div className=""> Humidity </div>
                                <div className="text-black pt-2 text-xl font-semibold"> {data?.current?.humidity}% </div>
                            </div>
                            <div>
                                <div className=""> Wind speed </div>
                                <div className="text-black pt-2 text-xl font-semibold"> {data?.current?.wind_kph} Km/Hr </div>
                            </div>
                            
                        </div>
                </div>

                <div id="rightContainer" className=" pt-10">
                <h1 className='text-gray-500 pl-12 text-lg'>Temperature</h1>
                    <div className="">
                        <LineChart
                        xAxis={[{ data: [ 0, 1, 2, 3] }]}
                        series={[
                            {
                            data: [ data?.current?.temp_c, data?.forecast?.forecastday[1]?.day?.avgtemp_c, data?.forecast?.forecastday[2]?.day?.avgtemp_c, data?.forecast?.forecastday[3]?.day?.avgtemp_c],
                            area: true,
                            
                            },
                        ]}
                        width={600}
                        height={200}
                        
                        />
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-col items-center text-white rounded bg-blue-400 p-6 px-12">
                            <h1>Today</h1>
                            <img src={data?.forecast?.forecastday[0]?.day?.condition?.icon} className=" " />
                            <h1 className=' font-thin text-sm'>{data?.current?.condition?.text}</h1>
                            <h1>{data?.current?.temp_c}°C</h1>
                        </div>
                        
                        <Fcard ficon={data?.forecast?.forecastday[1]?.day?.condition?.icon} date={data?.forecast?.forecastday[1]?.date} condition={data?.forecast?.forecastday[1]?.day?.condition?.text} temp={data?.forecast?.forecastday[1]?.day?.avgtemp_c} />
                        <Fcard ficon={data?.forecast?.forecastday[2]?.day?.condition?.icon} date={data?.forecast?.forecastday[2]?.date} condition={data?.forecast?.forecastday[2]?.day?.condition?.text} temp={data?.forecast?.forecastday[2]?.day?.avgtemp_c} />
                        <Fcard ficon={data?.forecast?.forecastday[3]?.day?.condition?.icon} date={data?.forecast?.forecastday[3]?.date} condition={data?.forecast?.forecastday[3]?.day?.condition?.text} temp={data?.forecast?.forecastday[3]?.day?.avgtemp_c} />
                        
  

                    </div>
                <div>

                </div>
                </div>
      </div>
    </div> 
    </div> 
    
  );
};

export default WeatherApp;
