// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    clickHandler = (event) => {
        let coords = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coords)
    }

    render() {
        return (
            <button onClick={this.clickHandler}>hi</button>
        )
    }
}