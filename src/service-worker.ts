/* eslint-disable no-restricted-globals */
import { clientsClaim } from "workbox-core";
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate, CacheFirst } from "workbox-strategies";

clientsClaim();
(self as unknown as ServiceWorkerGlobalScope).skipWaiting();
precacheAndRoute((self as unknown as ServiceWorkerGlobalScope).__WB_MANIFEST);

// google fonts
registerRoute(
	({ url }) => url.origin === "https://fonts.googleapis.com",
	new StaleWhileRevalidate({
		cacheName: "google-fonts-stylesheets",
	})
);

registerRoute(
	({ url }) => url.origin === "https://fonts.gstatic.com",
	new CacheFirst({
		cacheName: "google-fonts-webfonts",
		plugins: [
			new CacheableResponsePlugin({
				statuses: [0, 200],
			}),
			new ExpirationPlugin({
				maxEntries: 30,
				maxAgeSeconds: 30 * 24 * 60 * 365,
			}),
		],
	})
);

//scripts and stylesheets
registerRoute(
	({ request }) =>
		request.destination === "script" || request.destination === "style",
	new StaleWhileRevalidate({
		cacheName: "static-resources",
	})
);

// api response
registerRoute(
	({ url }) => url.origin === "https://pokeapi.co",
	new CacheFirst({
		cacheName: "pokeapi-response",
		plugins: [
			new CacheableResponsePlugin({
				statuses: [0, 200],
			}),
			new ExpirationPlugin({
				maxEntries: 30,
				maxAgeSeconds: 30 * 24 * 60 * 365,
			}),
		],
	})
);

//api images
registerRoute(
	({ url }) => url.origin === "https://raw.githubusercontent.com",
	new CacheFirst({
		cacheName: "pokemon-sprites",
		plugins: [
			new CacheableResponsePlugin({
				statuses: [0, 200],
			}),
			new ExpirationPlugin({
				maxEntries: 30,
				maxAgeSeconds: 30 * 24 * 60 * 365,
			}),
		],
	})
);
