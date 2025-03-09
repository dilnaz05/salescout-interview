// Implement a Counter component with two buttons:
// “Increase” and “Decrease”, which displays the current counter value.
import React, { useState } from 'react'

function Counter() {
    // Your code goes here
    const [count, setCount]=useState(0);
    
    const incCount=()=>{
        setCount(count+1);
    };

    const decCount=()=>{
        setCount(count-1);
    };

    // return(
    //     <> 
    //         <h1>Count: {count}</h1>
    //         <button onClick={incCount}>increase</button>
    //         <button onClick={decCount}>decrease</button>
    //     </>
    // );
}

export default Counter