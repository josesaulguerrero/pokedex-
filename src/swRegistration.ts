import { Workbox } from "workbox-window";

export const registerServiceWorker = () => {
	if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
		const workbox = new Workbox("/service-worker.js");
		workbox.addEventListener("installed", (event) => {
			if (event.isUpdate) {
				if (
					window.confirm(
						"new app update is available, click ok to refresh"
					)
				) {
					window.location.reload();
				}
			}
		});
		workbox.register();
	}
};
