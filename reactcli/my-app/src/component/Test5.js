import React, { Component } from 'react'

export default class Test5 extends Component {
    render() {
        return (
            <div>
                <h1>0</h1><button onClick={this.addClick.bind(this)}>add</button>
            </div>
        )
    }
}
