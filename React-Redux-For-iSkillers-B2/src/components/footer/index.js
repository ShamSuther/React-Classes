import React from "react";
import { connect } from "react-redux";
let Footer = (props) => {
    console.log(props.data)
    return (
        <div>
            <h1>Footer</h1>
            <ul>
                <li>{props.data.address}</li>
                <li>{props.data.url}</li>
                <li>{props.data.name}</li>
                <li>{props.data.mobNum}</li>
            </ul>
        </div>
    )
}


let getStateFromProps = (state) => {
    console.log("Footer Component======>>>>", state);
    return {
        data: state
    }
}
export default connect(getStateFromProps, null)(Footer)