import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA({
    strategies: 'injectManifest',
    srcDir: 'src',
    filename: 'sw.ts',
    registerType: 'autoUpdate',
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'vue-workbox-pwa',
      short_name: 'vue-workbox-pwa',
      description: 'vue-workbox-pwa',
      theme_color: '#ffffff',
    },

    injectManifest: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
    },
       workbox: {
      cleanupOutdatedCaches: true,
          runtimeCaching: [
           {
                urlPattern: ({ request }) => request.destination === 'script',
                handler: 'StaleWhileRevalidate',
                options: {
                  cacheName: 'js-cache',
                  expiration: {
                    maxEntries: 50,
                    maxAgeSeconds: 60 * 60 * 24 * 7, // 7 روز
                  },
                },
              },                      
            {
                urlPattern: /\/assets\/.*\.svg(\?.*)?$/,
                handler: 'StaleWhileRevalidate',
              options: {
                cacheName: 'svg-cache',
                expiration: {
                  maxEntries: 100,
                  maxAgeSeconds: 30 * 24 * 60 * 60,
                },
              },
            },  {
    urlPattern: ({ request }) => request.destination === 'style',
    handler: 'StaleWhileRevalidate',
    options: {
      cacheName: 'css-cache',
      expiration: {
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 7,
      },
    },
  },
      ],
},
    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})