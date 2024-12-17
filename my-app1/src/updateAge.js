import { div } from "framer-motion/client";
import React from "react";
import { useState,useEffect } from "react";

function AgeUpdater({initialage}){
    const [age,setage]=useState(initialage);
    const [inputage,setinputage]=useState(initialage);

    useEffect(()=>{
        console.log("updated age to ${age}");

    },[age]);


    const handleupdateage=()=>{
        setage(inputage);
    };

    return (
        <div>
            <h1>Age : {age}</h1>
            <input type="number " value={inputage}
            onChange={(e) => setinputage(Number(e.target.value))}/>
            <button onClick={handleupdateage}>Update Age</button>
        </div>
    )
}
export default AgeUpdater