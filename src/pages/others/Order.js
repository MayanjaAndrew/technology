import React, { Component } from "react";
import "./Order.css";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Geolocation from "../hooks/Geolocation";
import Confirm from "./Confirm";
import Way from "../others/Way";
import {Link} from "react-router-dom";
import Person from "./Person";


class Order extends Component{
      constructor(props) {
        super(props)
    
        this.state = {
             meso:"Parent"
        }
    }
    greetparent=(childname)=>{
     document.getElementById("here").innerHTML=`${this.state.meso}`+`${childname}`;   
    }
    display=(childname)=>{
         document.getElementById("here").innerHTML='Ride on its Way'+ `${childname}`;
         document.getElementById("form").style.display="none";
    document.getElementById("confirmy").style.display="block";
    }

    
 
    render(){
     
      return(
    <>
     <section id="se">
     <Confirm result={this.display}/>
     <div id="confirmy">
         <div class="split">
            <p><h1>Order Confirmed</h1>
            <h3>Ride on its Way</h3>
            </p>
            <Person/>
            <p id="here"></p>
            <div class="motorcycle">
              <i class="fas fa-motorcycle fa-2x"></i>
            </div>    
        </div>
        <Link to="/"><button class="back">Back to Home</button></Link> 
        </div>
    <Geolocation/>
    </section>
      
    </>
    );}
}

export default Order;