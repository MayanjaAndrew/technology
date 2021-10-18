import React,{Component} from 'react';
import "./Confirm.css";


class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    ///this.handleChange = this.handleChange.bind(this);
    ///this.handleSubmit = this.handleSubmit.bind(this);
    //this.change=this.change.bind(this);
  }

  handleChange=(event)=> {
    this.setState({value: event.target.value});
    
  }

  handleSubmit=(event)=> {
  
    event.preventDefault();
  }
///  change=()=>{document.getElementById("form").style.display="none";document.getElementById("confirmy").style.display="block";}
/// <h1>{this.state.message}</h1><button onClick={()=>this.change()}>Change</button>onClick={this.change}  alert('Ordering ride to: ' + this.state.value);
  render() {
    return (
      <>
        <div id="body">
       
        <form  id="form" onSubmit={this.handleSubmit}>
        <label>
          <h2>WHERE ARE YOU HEADING?</h2>
        </label>
        <input type="text" id="destination" placeholder="Destination?" value={this.state.value} onChange={this.handleChange} />
        <button class="button" type="submit" onClick={()=>this.props.result(this.state.value)}>Confirm</button>
           
      </form>
      
 
      </div> 
      </>
     

    );
  }
}

export default Confirm;