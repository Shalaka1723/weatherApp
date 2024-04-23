import React from "react";
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { LineChart } from '@mui/x-charts/LineChart';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CloudIcon from '@mui/icons-material/Cloud';
import Cloud from "@mui/icons-material/Cloud";


const WeatherApp = () => {
  return (
    <>
    <div className=" bg-blue-50 justify-self-center p-14 container"> 
      <div id="mainContainer" className="flex flex-row justify-center rounded-lg shadow-lg shadow-slate-600  bg-white p-8 w-fit items-center ">

                <div id="leftContainer" className="flex flex-col p-10 gap-8 items-center">
                        
                        <div>  
                            <h>Your city</h>
                            <input type="text" placeholder="London" className="pl-2 py-1 ml-2 border-2 rounded-md" />
                        </div>
                        <a className='text-gray-500'>5:05 PM, Mon, Nov 23,2020</a>
                        <div className=" text-5xl font-semibold"> 
                            <CloudQueueIcon sx={{ fontSize: 80 }} />
                            <h> 72°F</h>
                        </div>
                        <h className=" text-3xl font-bold">Cloudy</h>


                        <div className="flex flex-row gap-10 text-gray-400">
                            <div>
                                <div className=""> Humidity </div>
                                <div className="text-black pt-2 text-xl font-semibold"> 45% </div>
                            </div>
                            <div>
                                <div className=""> Wind speed </div>
                                <div className="text-black pt-2 text-xl font-semibold"> 19.2 km/j </div>
                            </div>
                            
                        </div>
                </div>

                <div id="rightContainer" className=" pt-10">
                <h className='text-gray-500 pl-12 text-lg'>Temperature</h>
                    <div className="">
                        <LineChart
                        xAxis={[{ data: [ 3, 4, 6, 10] }]}
                        series={[
                            {
                            data: [ 4, 4.5, 3.5, 6],
                            area: true,
                            },
                        ]}
                        width={600}
                        height={200}
                        
                        />
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-col items-center text-white rounded bg-blue-400 p-6 px-12">
                            <h>Today</h>
                            <CloudQueueIcon className="my-2" sx={{ fontSize: 30 }} />
                            <h className=' font-thin text-sm'>Humidity</h>
                            <h>30%</h>
                        </div>
                        
                        <div className="flex flex-col items-center text-gray-500 rounded p-6 px-12">
                            <h>Nov 24</h>
                            <ThunderstormIcon className="my-2" sx={{ fontSize: 30 }} />
                            <h className=' font-thin text-sm'>Humidity</h>
                            <h>36%</h>
                        </div>

                        <div className="flex flex-col items-center text-gray-500 rounded p-6 px-12">
                            <h>Nov 25</h>
                            <WbSunnyIcon className="my-2" sx={{ fontSize: 30 }} />
                            <h className=' font-thin text-sm'>Humidity</h>
                            <h>20%</h>
                        </div>

                        <div className="flex flex-col items-center text-gray-500 rounded p-6 px-12">
                            <h>Nov 26</h>
                            <Cloud className="my-2" sx={{ fontSize: 30 }} />
                            <h className=' font-thin text-sm'>Humidity</h>
                            <h>15%</h>
                        </div>

                    </div>
                <div>

                </div>
                </div>
      </div>
    </div>  
    </>
  );
};

export default WeatherApp;
