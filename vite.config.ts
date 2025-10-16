import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
      output: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          gsap: ['gsap'],
          lenis: ['lenis'],
          lucide: ['lucide-react'],
          // Split UI components for better caching
          ui: ['./src/components/Header.tsx', './src/components/Footer.tsx'],
          // Split main content sections
          content: [
            './src/components/Hero.tsx',
            './src/components/About.tsx',
            './src/components/Services.tsx',
          ],
        },
        // Ensure assets are hashed for better caching
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js',
      },
    },
    chunkSizeWarningLimit: 1000,
    // Generate sourcemaps only for production debugging
    sourcemap: false,
    // Preload critical chunks
    modulePreload: {
      polyfill: true,
    },
  },
  css: {
    devSourcemap: false,
  },
});
