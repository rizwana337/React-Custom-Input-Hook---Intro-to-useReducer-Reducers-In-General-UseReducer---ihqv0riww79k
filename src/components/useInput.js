import { useState } from "react";

//complete the input hook
const useInput = (defaultValue) => {
   const [currentValue,setCurrentValue]=useState(defaultValue)
   return{
    value:currentValue,
    onChange:(e)=>{
        setCurrentValue(e.target.value);
    }
   }
};

export default useInput;
