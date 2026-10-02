import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        ['index.html', 'about/index.html', 'services/index.html', 'work/index.html', 'contact/index.html']
          .map((page) => [page, fileURLToPath(new URL(page, import.meta.url))]),
      ),
    },
  },
});
