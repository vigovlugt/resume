import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        // React PDF doesn't support hot reloading, so we need to do a full reload
        {
            name: "full-reload-react-pdf",
            handleHotUpdate({ file, server }) {
                if (file.endsWith(".tsx")) {
                    server.ws.send({
                        type: "full-reload",
                    });
                }
            },
        },
    ],
});
