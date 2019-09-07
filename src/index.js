import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./components/App";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";

import WebFont from "webfontloader";

const store = createStore(
	reducers, //todos los reduces
	{}, //estado inicial
	applyMiddleware(reduxThunk)
);

WebFont.load({
	google: {
		families: ["Lato:400,700", "sans-serif"]
	}
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
