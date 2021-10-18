import React,{useState} from 'react'

function Hook() {
    const [count,setCount]=useState(0)
    const Incre=()=>{
        setCount(count+1);
    }
    return (
        <div>
            <button onClick={Incre}>Count {count}</button>
        </div>
    )
}

export default Hook
