"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import store from "./redux/getStore";
import {Provider} from "react-redux";

// Accept HMR replacements
if (module.hot) {
    module.hot.accept();
}

const root = document.querySelector('#root');

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    root
);
