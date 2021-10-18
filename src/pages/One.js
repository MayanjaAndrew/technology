import React, {useState,useEffect} from 'react'

function One() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    useEffect(()=>{document.title=`You clicked ${count} times`},[count]
    )
    const Handler=()=>{
        setCount(count+1)

    }
    return (
        <div>
        <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={Handler}>Click {count}</button>
        </div>
    )
}

export default One
