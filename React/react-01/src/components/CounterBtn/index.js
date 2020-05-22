import React, { Component,Fragment } from 'react'

export default class CounterBtn extends Component {
    render() {
        return (
            <Fragment>
                <button onClick={this.props.onClick}>{this.props.children}</button>
            </Fragment>
        )
    }
}
