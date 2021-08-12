import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

let renderThree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App stateApp={state} dispatch={store.dispatch.bind(store)} store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderThree(store.getState());

reportWebVitals();
store.subscribe(renderThree);