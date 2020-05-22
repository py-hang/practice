// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component,Fragment } from 'react'
import {Counter,CounterBtn} from './components'
import {increment,decrement} from './components/Action/count'

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <CounterBtn onClick={()=>{
                   this.props.store.dispatch(decrement(0)) 
                }}>-</CounterBtn>
                <Counter store={this.props.store}></Counter>
                <CounterBtn onClick={()=>{
                   this.props.store.dispatch(increment(1)) 
                }}>+</CounterBtn>
            </Fragment>
        )
    }
}
