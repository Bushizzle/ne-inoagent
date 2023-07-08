import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import zip from 'rollup-plugin-zip';

import {
  chromeExtension,
  simpleReloader,
} from 'rollup-plugin-chrome-extension';

import manifest from './src/manifest.json' assert { type: 'json' };

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
    zip({
      file: `compressed/${manifest.name}-${manifest.version}.zip`,
    }),
  ],
};
