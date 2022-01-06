// libraries and hooks
import React from "react";
import { render } from "react-dom";
// components
import { App } from "./router/App.routes";

render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
