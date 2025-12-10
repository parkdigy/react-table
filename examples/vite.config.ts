import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ModulePackageJson from '../package.json';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [react()],
    base: isProduction ? `/${ModulePackageJson.repository.baseUrl.split('/').pop()}/examples/dist/` : '/',
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.startsWith(`${__dirname}/node_modules/`)) {
              return 'vendor';
            }
          },
        },
      },
    },
  };
});
