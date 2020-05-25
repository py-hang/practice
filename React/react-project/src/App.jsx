import React, { Component } from 'react'
import './App.less';

const testHOC = (WrappedComponent)=>{
    return class HOCComponent extends Component{
        render(){
            return(
                <>
                 <WrappedComponent></WrappedComponent>
                <div>高阶组件</div>
                </>
            )
        }
    }
}

class App extends Component {
    render() {
        return (
            <div>
                app                                    
            </div>
        )
    }
}

export default testHOC(App)
