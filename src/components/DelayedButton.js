import React, { Component } from 'react'

class DelayedButton extends Component {


    handleDelayClick = (event) => {
        event.persist()
        window.setTimeout(() => { this.props.onDelayedClick(event) }, this.props.delay)
    }

    render() {

        return <button onClick={this.handleDelayClick}>Delayed</button>
    }
}



export default DelayedButton