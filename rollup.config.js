import path from 'path';
import json from '@rollup/plugin-json';
import cleanup from 'rollup-plugin-cleanup';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const outputConfigs = {
  cjs: {
    format: 'cjs',
    file: path.resolve(__dirname, 'dist/semver.cjs.js'),
  },
  'esm-bundler': {
    format: 'es',
    file: path.resolve(__dirname, 'dist/semver.esm-bundler.js'),
  },
  umd: {
    format: 'umd',
    file: path.resolve(__dirname, 'dist/semver.umd.js'),
  },
};

const packageConfigs = Object.keys(outputConfigs).map((format) =>
  createConfig(format, outputConfigs[format]),
);

function createConfig(format, output) {
  const isUmdBuild = /umd/.test(format);
  output.externalLiveBindings = false;
  if (isUmdBuild) output.name = 'Semver';

  return {
    output,
    input: path.resolve(__dirname, 'index.mjs'),
    plugins: [
      cleanup(),
      json({
        namedExports: false,
      }),
      nodeResolve({ browser: isUmdBuild }),
      commonjs({ sourceMap: false }),
    ],
  };
}

export default packageConfigs;