import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon-180x180.png','maskable-icon-512x512.jpg'],
      manifest: {

        name: "Chat App",
        short_name: "Chat App",
        theme_color: "#000000",
        background_color: "#000000",
        display: "standalone",
        scope: "/",
        start_url: "/",
        icons: [
        {
            "src": "pwa-64x64.png",
            "sizes": "64x64",
            "type": "image/jpg"
        },
        {
            "src": "pwa-192x192.png",
            "sizes": "192x192",
            "type": "image/jpg"
        },
        {
            "src": "pwa-512x512.png",
            "sizes": "512x512",
            "type": "image/jpg"
        },
        {
            "src": "maskable-icon-512x512.png",
            "sizes": "512x512",
            "type": "image/jpg"
        }
    ],
    screenshots: [
    {
      "src": "screenshot1.png",
      "sizes": "540x720",
      "type": "image/png"
    },
    {
      "src": "creenshot-wide.png",
      "sizes": "1080x720",
      "type": "image/png",
      "form_factor": "wide"
    }
  ]
  }}),
  ],
});
