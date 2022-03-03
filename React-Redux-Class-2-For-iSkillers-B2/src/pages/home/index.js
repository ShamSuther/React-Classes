import React from 'react';
import { connect } from 'react-redux';
import About from '../about.js';
import {
    decrement,
    increment
} from './../../store/action';
let Home = (props) => {
    console.log("props", props)
    return (
        <div className="App">
            <h1>Home</h1>
            <div>
                <button onClick={() => props.decrement()}>-</button>
                <span>{props.data}</span>
                <button onClick={() => props.increment()}>+</button>
            </div>
            <About />
        </div >
    );
}
let mapStateToRrops = (state) => {
    return {
        data: state
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
    }
}
export default connect(mapStateToRrops, mapDispatchToProps)(Home);
