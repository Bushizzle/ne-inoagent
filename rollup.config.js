import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import {
  chromeExtension,
  simpleReloader,
} from 'rollup-plugin-chrome-extension';

export default {
  input: 'src/manifest.json',
  output: {
    dir: './dist',
    format: 'esm',
  },
  plugins: [
    chromeExtension(), // always put chromeExtension() before other plugins
    simpleReloader(),
    resolve(),
    commonjs(),
    typescript(),
  ],
};
