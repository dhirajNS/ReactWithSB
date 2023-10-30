import React, { useState } from "react";
//import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { incNumber,decNumber } from "../actions/ActionIndex";
const IncDec=()=>{
    
// const [incrementer,setIncrement]=useState(0);

    // const handleIncr = () => {
    //         setIncrement(incrementer+1);
    //   };
      
    // const handleDecr = () => {
    //     setIncrement(incrementer-1);
    //   };
const mysState=useSelector((state) => state.changeTheNumber);
const dispatch=useDispatch();
    return (
        <div className="flex items-center p-3">
            <h1>Apply Leave for </h1>
            <div  className="flex items-center p-3 ">
                <div className="border border-black">
                <button className="w-4 text-center bg-red-300 hover:bg-red-500" title="decrement" onClick={()=>dispatch(decNumber())}><span> - </span></button>
                </div>
                <div className="border border-black">
                <input className="text-center w-8" name="days" type="text" value={mysState}></input>
                </div>
                <div className=" border border-black">
                <button className="w-4 text-center  bg-green-300 hover:bg-green-500" title="increment" onClick={()=>dispatch(incNumber())} ><span> + </span></button>
                </div> 
            </div>
            <h1>Days </h1>
            </div>
    );
}

export default IncDec