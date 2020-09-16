// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component{
    handleButton = (event) => {
        this.props.onReceiveCoordinates([event.ClientX, event.ClientY])
    }

    render(){
        return(
            <button onClick={this.handleButton}>CoordinateButton</button>
        )
    }
}