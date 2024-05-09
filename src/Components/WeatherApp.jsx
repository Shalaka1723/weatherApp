import React, { useEffect } from "react";
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { LineChart } from '@mui/x-charts/LineChart';
import CloudIcon from '@mui/icons-material/Cloud';
import Cloud from "@mui/icons-material/Cloud";
//import getter from "../apis/currentapi"
import { useState } from "react";
import getData from "../apis/currentapi";
import Fcard from "./Fcard";
import getDataf from "../apis/forecastapi";



const WeatherApp = () => {
    
    const[data,setData] = useState("")
    let getter =()=>{
        getData().then((result)=>{
            setData(result)
        })
    }

    useEffect(() => {
        getter()
    },[])
    console.log(data)

    const[dataf,setDataf] = useState("")
    let getterf =()=>{
        getDataf().then((resultf)=>{
            setDataf(resultf)
        })
    }

    useEffect(() => {
        getterf()
    },[])
    console.log(dataf)
    console.log(dataf.forecast)

    let fcast= dataf?.forecast?.forecastday




    return (
    
    <div className=" bg-blue-50 h-screen w-screen align-middle p-14 flex justify-center"> 
      <div id="mainContainer" className="flex flex-row h-fit justify-center rounded-lg shadow-lg shadow-slate-600  bg-white p-8 w-fit items-center ">

                <div id="leftContainer" className="flex flex-col p-10 gap-8 items-center">
                        
                        <div>  
                            <h1>Your city</h1>
                            <input type="text" placeholder="London" className="pl-2 py-1 ml-2 border-2 rounded-md" />
                        </div>
                        <a className='text-gray-500'>{data?.location?.name}</a>
                        <div className=" text-5xl font-semibold"> 
                            <CloudQueueIcon sx={{ fontSize: 80 }} />
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
                            data: [ data?.current?.temp_c, dataf?.forecast?.forecastday[1]?.day?.avgtemp_c, dataf?.forecast?.forecastday[2]?.day?.avgtemp_c, dataf?.forecast?.forecastday[3]?.day?.avgtemp_c],
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
                            <CloudQueueIcon className="my-2" sx={{ fontSize: 30 }} />
                            <h1 className=' font-thin text-sm'>{data?.current?.condition?.text}</h1>
                            <h1>{data?.current?.temp_c}°C</h1>
                        </div>
                        


                        <Fcard date={dataf?.forecast?.forecastday[1]?.date} condition={dataf?.forecast?.forecastday[1]?.day?.condition?.text} temp={dataf?.forecast?.forecastday[1]?.day?.avgtemp_c} />
                        <Fcard date={dataf?.forecast?.forecastday[2]?.date} condition={dataf?.forecast?.forecastday[2]?.day?.condition?.text} temp={dataf?.forecast?.forecastday[2]?.day?.avgtemp_c} />
                        <Fcard date={dataf?.forecast?.forecastday[3]?.date} condition={dataf?.forecast?.forecastday[3]?.day?.condition?.text} temp={dataf?.forecast?.forecastday[3]?.day?.avgtemp_c} />
                        
  

                    </div>
                <div>

                </div>
                </div>
      </div>
    </div>  
    
  );
};

export default WeatherApp;
