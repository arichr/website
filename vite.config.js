/** @type {import('vite').UserConfig} */
import { createHtmlPlugin } from 'vite-plugin-html';
import autoprefixer from 'autoprefixer';

const targets = [
    "es2015",
    "firefox53", // firefox52 - transforming for-of loops is not supported
    "chrome56",
    "edge15",
    "opera43",
    "safari12" // safari10 - 'const' is not supported
];

export default {
    clearScreen: false,
    plugins: [
        createHtmlPlugin({ minify: true }),
    ],
    css: {
        devSourcemap: true,
        postcss: {
            plugins: [
                autoprefixer({ cascade: false })
            ],
        },
        preprocessorOptions: {
            scss: { style: "compressed" }
        }
    },
    json: { stringify: true },
    build: { target: targets },
    esbuild: { target: targets }
};
