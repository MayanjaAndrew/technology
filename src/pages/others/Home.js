import React from "react";
import './Home.css';
import {Link} from "react-router-dom";
import Notf from "../hooks/Notf";


class Home extends React.Component{
    /**carousel=()=>{
        const track=document.querySelector('.carousel__track');
        const slides=Array.from(track.children);
        const nextbutton=document.querySelector('carousel__button--right');
        const prevbutton=document.querySelector('carousel__button--left');
        const dotsNav=document.querySelector('carousel__nav');
        const dots=Array.from(dotsNav.children);
        const slideWidth=slides[0].getBoundingClientRect().width;
        slides[0].style.left=0;
        slides[1].style.left=slideWidth+'px';
        console.log(slides);
    }**/
  
    constructor(props) {
        super(props)
    
        this.state = {
             isloggedin:false
        }
    }
    
   
    render(){
      /*  if (this.state.isloggedin){
            return (<div><p>Welcome User</p>
            <p>Welcome User</p>
            <p>Welcome User</p>
            <p>Welcome User</p>
            <p>Welcome User</p></div>)
        }
        else{*/
        return(
            this.state.isloggedin?<div><p>Welcome User</p>
            <p>Welcome User</p>
            <p>Welcome User</p>
            <p>Welcome User</p>
            <p>Welcome User</p></div>:<>
   <section id="order">
       <div class="container">
           <div class="split">
           <div class="placeorder"><p>Lets get you there!</p><Link to="/order"><button><h4>Order a Ride</h4></button></Link></div>
           <div class="slider"></div>
           <div class="welcome"><p>WELCOME TO RIDEMYWAY!</p></div>

           <div class="carousel">
           <button class="carousel__button carousel__button--left">n</button>
           <div class="carousel__track-container">
             <ul class="carousel__track">
               <li class="carousel__slide"><div class="carousel__image"></div></li>
               <li class="carousel__slide"><div class="carousel__image"></div></li>
               <li class="carousel__slide"><div class="carousel__image"></div></li>
             </ul>
           </div>
           <button class="carousel__button carousel__button--right">p</button>
           <div class="carousel__nav">
               <button class="carousel__indicator current-slide"></button>
               <button class="carousel__indicator"></button>
               <button class="carousel__indicator"></button>
           </div>
           </div>
         
           </div>
       </div>
   </section>
   <section id="orderone">
       <div class="containerone">
           <div class="split">
               <div class="title">
                   <p>BROWSE CATEGORIES</p><p><hr/></p>
                </div>
                <div class="testing">

                <div class="groupone">
                <div class="card"><div class="figure"></div><div class="alt">Trending</div></div>
                <div class="cardone"><div class="figureone"></div><div class="alt">Top Offers</div></div>
                </div>

               <div class="grouptwo">
               <div class="cardtwo"><div class="figuretwo"></div><div class="alt">Recent</div></div>
               <div class="cardthree"><div class="figurethree"></div><div class="alt">History</div></div>
               </div>
                   
                </div>
           </div>
       </div>
   </section>
  
        
    </>);}
}
export default Home;