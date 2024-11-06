import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { visualizer } from 'rollup-plugin-visualizer';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ }) => {

  return {
    plugins: [
      react(),
      svgr(),
      nodePolyfills({
        globals: {
          Buffer: true,
        },
      }),
      chunkSplitPlugin(),
      visualizer({
        gzipSize: true,
        brotliSize: true,
        emitFile: false,
        filename: 'analyze.html',
        open: true,
      }),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
    },
    build: {
      minify: true,
      target: 'es2022',
      sourcemap: 'hidden',
      rollupOptions: {
        treeshake: 'recommended',
        onwarn(warning, warn) {
          if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
            return;
          }
          warn(warning);
        },
      },
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
    server: {
      host: 'localhost',
      port: 3000,
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
  };
});
