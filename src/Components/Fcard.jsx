import React from "react";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

function Fcard({date, condition, temp}) {

  return (
    <>
      <div className="flex flex-col items-center text-gray-500 rounded p-6 px-12">
        <h1>{date}</h1>
        <ThunderstormIcon className="my-2" sx={{ fontSize: 30 }} />
        <h1 className=" font-thin text-sm">{condition}</h1>
        <h1>{temp}</h1>
      </div>
    </>
  );
}

export default Fcard;
