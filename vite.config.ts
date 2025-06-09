import {defineConfig} from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [],
    server: {
        host: "0.0.0.0"
    },
    assetsInclude: [],
    build: {
        assetsInlineLimit: 4096 * 100,
        outDir: "dist",
    },
});
