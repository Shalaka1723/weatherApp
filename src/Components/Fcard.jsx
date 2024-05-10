import React from "react";

function Fcard({ficon, date, condition, temp}) {

  return (
    <>
      <div className="flex flex-col items-center text-gray-500 rounded p-6 px-12">
        <h1>{date}</h1>
        <img src={ficon} />
        <h1 className=" font-thin text-sm">{condition}</h1>
        <h1>{temp}°C</h1>
      </div>
    </>
  );
}

export default Fcard;
