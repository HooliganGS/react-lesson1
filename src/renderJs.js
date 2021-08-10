import ReactDOM from "react-dom";
import App from "./App";
import {addPost} from "./redux/state";
import React from "react";

export let renderThree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App stateApp={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
