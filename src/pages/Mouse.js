import React,{useState,useEffect} from 'react'

function Mouse() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)

    const logmouse=e=>{
        setX(e.clientX)
        setY(e.clientY)

    }

    useEffect(()=>{
        window.addEventListener('mouseover',logmouse)
    },[])
    return (
        <div>
        Hooks X-{x} Y-{y}
        </div>
    )
}

export default Mouse
