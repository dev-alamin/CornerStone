import { defineConfig } from 'vite';
import {resolve} from 'path';

export default defineConfig({
    // Set base to relative so the project works in any sub-folder
    base: './',

    build: {
        // Generates a manifest for easier WP conversion later
        manifest: true,
        outDir: 'dist',
        assetsDir: 'assets',
        // Ensures small images are not inlined as base64 (ThemeForest prefers files)
        assetsInlineLimit: 0,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                blog: resolve(__dirname, 'blog.html'),
                blogDetails: resolve(__dirname, 'blog-details.html'),

                features: resolve(__dirname, 'features.html'),
                pricing: resolve(__dirname, 'pricing.html'),
                changelog: resolve(__dirname, 'changelog.html'),

                company: resolve(__dirname, 'company.html'),
                team: resolve(__dirname, 'team.html'),

                helpCenter: resolve(__dirname, 'help-center.html'),
                helpContact: resolve(__dirname, 'help-contact.html'),
                helpKB: resolve(__dirname, 'help-knowledge-based.html'),
                articleSupport: resolve(__dirname, 'article-support.html'),

                login: resolve(__dirname, 'login.html'),
                signup: resolve(__dirname, 'signup.html'),
                requestDemo: resolve(__dirname, 'request-demo.html'),

                legals: resolve(__dirname, 'legals.html'),
                elements: resolve(__dirname, 'elements.html'),
            },
            output: {
                // Clean file names for buyers to understand
                entryFileNames: `assets/js/[name].js`,
                chunkFileNames: `assets/js/[name].js`,
                assetFileNames: `assets/[ext]/[name].[ext]`,
            },
        },
        // Minification settings
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true, // Professional requirement
                drop_debugger: true,
            },
        },
    },
    server: {
        port: 3000,
        open: true,
    },
});