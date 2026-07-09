import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";


export default defineConfig({

    plugins: [

        react(),

        compression({

            algorithm: "gzip",

            ext: ".gz"

        }),

    ],

    build: {

        target: "es2020",

        cssCodeSplit: true,

        minify: "esbuild",

        sourcemap: false,

        reportCompressedSize: false,

        chunkSizeWarningLimit: 1000,

        assetsInlineLimit: 4096,

        rollupOptions: {

            output: {

                manualChunks(id) {

                    if (id.includes("react") || id.includes("react-dom")) {

                        return "vendor-react";

                    }

                    if (id.includes("node_modules")) {

                        return "vendor";

                    }

                    if (id.includes("/src/components/")) {

                        return "ui-components";

                    }

                }

            }

        }

    }

});