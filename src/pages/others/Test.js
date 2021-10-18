import React from 'react';
import Person from './Person';

function Test() {
     const naming=[{id:1,name:'alex',age:28},{id:2,name:'allen',age:32},{id:3,name:'alvin',age:28}]
      const list=naming.map(nam=><Person nam={nam}/>)
    return (
        <div>
         {list}   
        </div>
    )
}

export default Test

