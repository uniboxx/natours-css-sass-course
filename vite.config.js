import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  base: '/natours-css-sass-course/',

  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
