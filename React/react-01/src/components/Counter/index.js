import React, { Component } from 'react'
export default class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count:null
        }
    }

    getState = ()=>{
         this.setState({
            count:this.props.store.getState().counter.count
        })
    }
    componentDidMount(){
        console.log(this.props.store.getState().counter.count)
       this.getState();
    //    重点， 通过订阅更新
       this.props.store.subscribe(this.getState);
    }
    render() {
        return (
            <span>{this.state.count}</span>
        )
    }
}
