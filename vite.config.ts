import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  publicDir: 'public',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        display: 'standalone',
        display_override: ['window-controls-overlay'],
        lang: 'en',
        name: 'Mario Quiroga | Software Developer',
        short_name: 'Mario Quiroga',
        description: "Mario Quiroga's web portfolio",
        theme_color: '#fff',
        background_color: '#98509f',
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /\.(?:pdf)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'pdf-cache',
              expiration: {
                maxAgeSeconds: 3600, // 1 hora
              },
            },
          },
        ],
        skipWaiting: true, // Fuerza al SW a activarse inmediatamente
        clientsClaim: true, // Controla las pestañas abiertas automáticamente
      },
    }),
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
    assetsDir: 'images',
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://www.aatest.host',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
