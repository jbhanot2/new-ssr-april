import React from 'react';
import {formAction} from './../redux/action';
import { connect } from 'react-redux';
import * as constants from './../redux/constant';
import { bindActionCreators } from 'redux';

let reducerData = constants.ACTION_FORM;

class DisplayRouteComponent extends React.Component {
    render() {
        return (
                this.props[reducerData] ?
                    <div>
                        <div>Name: {this.props[reducerData].name}</div>
                        <div>Email: {this.props[reducerData].email}</div>
                        <div>Subject: {this.props[reducerData].subject}</div>
                        <div>Message: {this.props[reducerData].message}</div>
                    </div> : ""
        )
    }
}

const mapStateToProps = (state) => {
    let mapToState = {};
    mapToState[reducerData] = state;
    return mapToState;
 };

 const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        formAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayRouteComponent);