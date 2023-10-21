import babel from '@rollup/plugin-babel';

const config = {
  input: 'index.js',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'umd',
      name: 'alphavantage',
      globals: {
        'cross-fetch': 'fetch'
      }
    }
  ],
  plugins: [babel({ babelHelpers: 'bundled' })],
  external: ['cross-fetch', 'cross-fetch/polyfill']
};

export default config;
