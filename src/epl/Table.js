import React,{useState} from 'react';
import "./epl.css";


function Table() {
    const team=[
    {name:"Arsenal",W:4,D:5,L:1,GD:0,GA:0},
    {name:"AstonVilla",W:0,D:1,L:0,GD:0,GA:0},
    {name:"Brighton",W:8,D:0,L:2,GD:0,GA:0},
    {name:"Burnely",W:9,D:1,L:0,GD:0,GA:0},
    {name:"Brentford",W:9,D:0,L:1,GD:0,GA:0},
    {name:"Chelsea",W:8,D:2,L:0,GD:0,GA:0},
    {name:"ManUnited",W:10,D:0,L:0,GD:0,GA:0}
]
const [name,setName]=useState('')
const [win,setWin]=useState('')
const [loss,setLoss]=useState('')
const [draw,setDraw]=useState('')
const add=()=>{
    setDraw(parseInt(draw));
    setWin(parseInt(win))
    var points=parseInt(win)*3+parseInt(draw)
    document.getElementById("tabluea__body").insertAdjacentHTML('beforeend', 
    `<tr>`+
    `<td>${name}</td>`+
    `<td>${win}</td>`+
    `<td>${draw}</td>`+
    `<td>${loss}</td>`+
    `<td>0</td>`+
    `<td>0</td>`+
    `<td>${points}</td>`+
    `</tr>`);
}
const handlesubmit=(event)=>{
    event.preventDefault()
}
const check=()=>{
    if (document.getElementById("check").checked===true){
         document.getElementById("split_register").style.display="block";}
    else {
          document.getElementById("split_register").style.display="none";
        }
}



    return (
       <section id="test__section">
           <div class="container">
               <div class="split">
               <table id="split_tabluea">
               <thead><tr>
                       <th>Team</th>
                       <th>W</th>
                        <th>D</th>
                        <th>L</th>
                       <th>GD</th>
                    <th>GA</th>
                    <th>Pts</th>
                   </tr></thead>
               <tbody id="tabluea__body">
                   {team.map((item,index)=><tr><td>{index}{item.name}</td><td>{item.W}</td><td>{item.D}</td>
                   <td>{item.L}</td>
                   <td>{item.GD}</td>
                   <td>{item.GA}</td>
                   <td>{(item.W*3)+item.D}</td>
                   </tr>)}
               </tbody>
                        
                   
               </table>
                <input onClick={check} type="checkbox" id="check" class="check"/>
                <label for="check">Register</label>

        <form id="split_register" onSubmit={handlesubmit}>
          <input type="text" value={name} placeholder="Team" onChange={e=>setName(e.target.value)}/>
           <input type="text" value={win} placeholder="wins" onChange={e=>setWin(e.target.value)}/>
        <input type="text" value={draw} placeholder="draws" onChange={e=>setDraw(e.target.value)}/>
           <input type="text" value={loss} placeholder="loss" onChange={e=>setLoss(e.target.value)}/>
            <button type="submit" onClick={add}>Register</button>
        </form>
        </div>
           </div>
       </section>
     
    )
}

export default Table
