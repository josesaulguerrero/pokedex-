// libraries and hooks
import React from "react";
import { render } from "react-dom";
// components
import { App } from "./router/App.routes";
import { ReduxProvider } from "./state/store";
// global styles
import "./styles/global.css";
//service worker registration
import { registerServiceWorker } from "./swRegistration";

render(
	<React.StrictMode>
		<ReduxProvider>
			<App />
		</ReduxProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

registerServiceWorker();
