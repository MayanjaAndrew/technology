import React, { useState } from 'react'

function Control() {
     const initialcount=0;
     const [count, setCount] = useState(initialcount);
    const [name, setName] = useState({firstname:'',lastname:''});
    const Rename=(e)=>{
        setName({...name,firstname:e.target.value})
    }

    return (
        <div>
        {/*Count: {count} 
        <button onClick={()=>setCount(initialcount)}>Reset</button>
        <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increase</button> 
        <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrease</button>   */}
        <form>
            <input type="text" value={name.firstname} onChange={Rename}/>
            <input type="text" value={name.lastname} onChange={e=>setName({...name,lastname:e.target.value})}/>
            <h2>Firstname is {name.firstname}</h2>
            <h2>lastname is {name.lastname}</h2>
        </form>
        </div>
    )
}

export default Control

