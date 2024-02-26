// @ts-check
// next.config.js

import withPWA from "next-pwa";

export default withPWA({
    dest: "public",
    disable:  process.env.NODE_ENV !== 'production',
    register: true,
    skipWaiting: true,
})({
    eslint: { ignoreDuringBuilds: true },
    serverRuntimeConfig: { GTM_ID: process.env.GTM_ID || "GTM_ID" },
    webpackDevMiddleware: {
        watchOptions: {
            poll: 800,
            aggregateTimeout: 300,
        }
    }
});