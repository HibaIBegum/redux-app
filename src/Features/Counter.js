import React,{useState} from "react";
import {useSelector, useDispatch}  from "react-redux";
import "./Counter.css";
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    incrementIfOdd,
    selectCount,
  } from "./CounterSlice";
  

export  function Counter(){

    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncememtAmount] = useState("2");
  
    const incrementValue = Number(incrementAmount) || 0;
    
    

    return(
        <><div className="Counter-Component">
            <button class="button-56" onClick={()=> dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button class="button-56" onClick={()=> dispatch(increment())}>+</button>
        </div><div className="buttons">
                <input class="input-feild" value={incrementAmount} onChange={(e) => setIncememtAmount(e.target.value)}/>
                
                <button class="button-56" onClick={()=> dispatch(incrementByAmount(incrementValue))}>Add amount</button>
                <button class="button-56" onClick={()=> dispatch(incrementAsync(incrementValue))}>Add sync</button>
                <button class="button-56" onClick={()=> dispatch(incrementIfOdd(incrementValue))}>Add if Odd</button>
            </div></>

    );
}