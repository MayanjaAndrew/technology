import React from 'react';

class Notf extends React.Component {
    constructor(props){
        super(props)
        this.state={color:'greenyellow'}
    }

    render(){
         return (
        <div>
        <h2>{this.state.color}</h2>
        </div>
    )
    }
   
}

export default Notf

