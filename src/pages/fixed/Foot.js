import React from "react";
import "../fixed/foo.css";

function Foot(){
    return(
        <>
            <footer>
            <div class="wrapper">
            <div class="footerone">
            <h3>ABOUT US</h3>
            <p>Number one mobile delivery company,trusted by top companies and nationals</p>
            </div>
            <div class="footertwo">
            <h3>OUR SERVICES</h3>
            <input type="checkbox" class="services-checkbox" />
            <ul class="services">
                <li>Delivery</li>
                <li>Ride</li>
                <li>Food</li>
            </ul>
            </div>
            <div class="footerthree">
            <h3>OUR LOCATIONS</h3>
            <input type="checkbox" class="location-checkbox" />
            <ul class="location">
                <li>Kampala</li>
                <li>Wakiso</li>
                <li>Lugogo</li>
            </ul>
            </div>

             <div class="footerfour">
            <h3>CONTACT US</h3>
            <ul class="contact">
                <li><i class="far fa-envelope"></i>Email</li>
                <li><i class="fas fa-phone"></i>TEL</li>
                <li><i class="far fa-address-card"></i>Address</li>
            </ul>
            </div>
            </div>
           
            </footer>
        </>
    );
}
 export default Foot;
