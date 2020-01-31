import React, { Component } from 'react'

class SimpleComponent extends Component {
    constructor() {
        super()

        this.state = {
            mood: 'happy'
        }
    }

    handleClick = () => {
        let setMood = this.state.mood === 'happy' ? 'sad' : 'happy' 

        return this.setState({
            mood: setMood
        })
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )

    }
}

export default SimpleComponent