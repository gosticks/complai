import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import postcssJitProps from 'postcss-jit-props';
import OpenProps from 'open-props';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess({
		postcss: {
			plugins: [postcssJitProps(OpenProps)]
		}
	}),

	kit: {
		adapter: adapter()
	}
};

export default config;
