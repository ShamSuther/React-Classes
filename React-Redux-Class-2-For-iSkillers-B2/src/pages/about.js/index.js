import React from 'react';
import { connect } from 'react-redux'
let About = (props) => {
    return (
        <div>
            <h1>About</h1>
            <p>Counter: {props.data}</p>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        data: state
    }
}
export default connect(mapStateToProps, null)(About)