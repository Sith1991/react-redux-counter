import {createStore, bindActionCreators} from "redux";
import React from "react";
import ReactDOM from "react-dom";
import Counter from "./counter"

import reducer from "./reducer";
import * as actions from "./actions";

const store = createStore(reducer);

const {dispatch} = store;

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

const update = () => {
    ReactDOM.render(<Counter
        counter={store.getState()}
        dec={dec}
        inc={inc}
        rnd={()=>{
            const payload = Math.floor(Math.random()*10);
            return rnd(payload);
        }}
    />, document.getElementById('root'));
}

update();
store.subscribe(update);

