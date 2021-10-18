import React,{Component, useState} from 'react';
import "./Way.css";
import Confirm from './Confirm';
import {Link} from "react-router-dom";


class Way extends Component {
    render(){
        const{locate}=this.props
        return (
        <>
        <section id="sec">
        <div class="con">
        <div class="split">
             <h1>Order Confirmed</h1>
            <p>Ride on its Way {locate}</p>
            {/*<button onClick={this.props.greethandler}>Try</button>*/}
            <button onClick={()=>this.props.greethandler('andrew')}>Two</button>
        </div>   
        </div>
        
        </section>
        </>
       
    )}
}

export default Way
