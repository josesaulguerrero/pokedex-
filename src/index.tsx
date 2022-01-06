// libraries and hooks
import React from "react";
import { render } from "react-dom";
// components
import { App } from "./router/App.routes";
import { ReduxProvider } from "./state/store";
// global styles
import "./styles/global.css";

render(
	<React.StrictMode>
		<ReduxProvider>
			<App />
		</ReduxProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
