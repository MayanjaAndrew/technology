import React from 'react';
import "./Account.css";

class Account extends React.Component {
    constructor(props){
        super(props)
        this.state={count:0}
    }
    increment(){
        this.setState({count:this.state.count+1})
    }
    render(){
          return (
        <>
         <section id="settings">
             <div class="containerrr">
                  <div class="splittt">
                  <div class="profile">

                  <div class="enclosure">
                      <div class="picture"></div>
                  </div>
                  <div class="label"><h4>Name</h4><p>Mayanja Andrew</p></div>
                  </div>

                  <div class="information">
                  <div><p>Email:</p>
                      <p>Telephone:</p>
                      <p>Password:</p>
                      </div>
                  <div>
                      <p>andre##@gmail.com</p>
                      <p>+256 75#####</p>
                      <p>*****</p>
                      <p>You have {this.state.count}messages</p>
                  </div>
                  </div>   
                  </div>
                  <button onClick={()=>this.increment()}>Refresh</button>
             </div>
         </section>   
        </>
    )
    }
  
}

export default Account
