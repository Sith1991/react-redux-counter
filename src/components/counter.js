import React from 'react';
import {connect} from "react-redux";
import * as actions from '../actions';
import {bindActionCreators} from "redux";

const Counter = ({counter, dec, inc, rnd}) => {
    return (
        <div className="jumbotron">
            <h2>{counter}</h2>
            <button className="btn btn-primary btn-lg" onClick={dec}>DEC</button>
            <button className="btn btn-primary btn-lg" onClick={inc}>INC</button>
            <button className="btn btn-primary btn-lg" onClick={rnd}>RND</button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

const mapDispatchToProps = (dispatch) => {
    const {inc, dec, rnd} = bindActionCreators(actions, dispatch)
    return {
        inc: ()=> inc(),
        dec: ()=> dec(),
        rnd: ()=> {
            const payload = Math.floor(Math.random()*10);
            return rnd(payload);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);