import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ModulePackageJson from '../package.json';

const nodeModulesPath = `${__dirname}/node_modules/`;

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [react()],
    base: isProduction ? `/${ModulePackageJson.repository.baseUrl.split('/').pop()}/examples/dist/` : '/',
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.startsWith(nodeModulesPath)) {
              return `vendor-${id.substring(nodeModulesPath.length).split('/')[0]}`;
            }
          },
        },
      },
    },
  };
});
