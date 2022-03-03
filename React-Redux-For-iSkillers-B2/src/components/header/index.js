import React from "react";
import { connect } from 'react-redux'
let Header = (props) => {
    return (
        <div>
            <h1>Header</h1>
            <ul>
                <li>{props.data.address}</li>
                <li>{props.data.url}</li>
                {/* <li>{props.data.name}</li> */}
                <li>{props.data.mobNum}</li>
            </ul>
        </div>
    )
}

let mapStateToProps = (state) => {
    console.log("header component===>>>", state);
    return {
        data: state
    }
}
export default connect(mapStateToProps, null)(Header)