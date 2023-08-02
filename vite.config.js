import {defineConfig} from 'vite';
import nightwatchPlugin from 'vite-plugin-nightwatch';

const asyncSvelte = async () => {
  const SveltPlugin = await import('@sveltejs/vite-plugin-svelte');
  return SveltPlugin.svelte();
};

export default defineConfig({
  optimizeDeps: {
    include: ['svelte']
  },
  plugins: [
    asyncSvelte(),
    nightwatchPlugin({
      componentType: 'svelte'
    })
  ]
});
