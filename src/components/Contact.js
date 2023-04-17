import { useEffect, useState } from "react";

const Contact = ()=>{
    [count, setCount]= useState(0);
    const timer = setInterval(()=>{
        console.log("ere")
    },1000)
     useEffect(()=>{
        console.log("useEffect")
    
    return ()=>{
        clearInterval(timer)
    }
    },[getCount]
    
    
    )
    function getCount(){
            setCount(++count)
    }

    function getData(){
        setCount(++count)
}
    return (
        <h1>
            This is contact Page  {count}
            <button onClick={()=> getData()}>Count</button>
        </h1>
    )
}

export default Contact;