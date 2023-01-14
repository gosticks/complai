import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import postcssJitProps from 'postcss-jit-props';
import autoprefixer from 'autoprefixer';
import OpenProps from 'open-props';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess({}),

	kit: {
		adapter: adapter()
	}
};

export default config;
