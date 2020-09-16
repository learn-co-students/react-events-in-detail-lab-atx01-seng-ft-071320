// Code CoordinatesButton Component Here
import React, { Component } from 'react';


class CoordinatesButton extends Component {

    handleClick = (event) => {
       // console.log(event.clientX)
        let x = event.clientX
        let y = event.clientY
        let coordinate = [x, y]
        this.props.onReceiveCoordinates(coordinate)
    }


    render(){
        return( <button onClick={this.handleClick}>Coordinate</button>)
    }
}

export default CoordinatesButton;