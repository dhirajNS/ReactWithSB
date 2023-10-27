import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
const IncDec=()=>{
    
const [incrementer,setIncrement]=useState(0);

    const handleIncr = () => {
            setIncrement(incrementer+1);
      };
      
    const handleDecr = () => {
        setIncrement(incrementer-1);
      };
    return (
        <div className="flex items-center p-3">
            <h1>Apply Leave</h1>
            <div  className="flex items-center p-3 ">
                <div className="border border-black">
                <button className="w-4 text-center bg-red-300 hover:bg-red-500" title="decrement" onClick={() => handleDecr()}><span> - </span></button>
                </div>
                <div className="border border-black">
                <input className="text-center w-8" name="days" type="text" value={incrementer}></input>
                </div>
                <div className=" border border-black">
                <button className="w-4 text-center  bg-green-300 hover:bg-green-500" title="increment" onClick={() => handleIncr()} ><span> + </span></button>
                </div> 
            </div>
            </div>
    );
}

export default IncDec