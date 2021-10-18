import React from 'react';
import "./history.css";

function History() {
    return (
        <section class="sectio">
            <div class="contain">
                <div class="spli">
                <div class="names">
                <div class="headshot">
                    <div class="shot"></div>
                </div>
                <div class="nem"><h3 class="h3">Andrew Mayanja</h3></div>
                </div>

                  <hr class="hr"></hr>

                 <div class="measure">
                     <div class="measureone">
                         <div><h3 class="h3">112</h3><p>Rides Taken</p></div>
                         <div><h3 class="h3">582.62</h3><p>Miles Ridden</p></div>
                     </div>
                    
                     <div class="measuretwo">
                         <div><h3 class="h3">1d 2h 44m</h3><p>Riding Time</p></div>
                         <div><h3 class="h3">12h 51m</h3><p>Total Wait time</p></div>
                     </div>
                     <hr class="hr"></hr>
                 </div>
                  <div class="type">
                      <div><i class="fas fa-motorcycle fa-2x"></i><div>Boda<p>5rides</p></div></div>
                      <div><i class="fas fa-car fa-2x"></i><div>Boda<p>5rides</p></div></div>
                  </div>

                </div>
            </div>
        </section>
    )
}

export default History

