import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import sass from 'rollup-plugin-sass';
import del from 'rollup-plugin-delete';
import babel from '@rollup/plugin-babel';
import fs from 'fs';
import path from 'path';
import packageJson from './package.json';

const getOutput = (path, format) => ({
  file: path,
  format: format,
  sourcemap: false,
  compact: true,
  exports: 'named',
});

const getConfig = () => ({
  input: 'src/index.ts',
  output: [getOutput(packageJson.main, 'cjs'), getOutput(packageJson.module, 'esm')],
  external: Object.keys(packageJson.dependencies || {}),
  context: 'window',
  plugins: [
    del({ targets: 'dist/*' }),
    peerDepsExternal(),
    sass({
      insert: true,
      api: 'modern',
      options: {
        style: 'compressed',
      },
    }),
    resolve(),
    commonjs({
      include: /node_modules/,
    }),
    typescript({ useTsconfigDeclarationDir: true }),
    babel({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      babelHelpers: 'bundled',
      presets: [
        ['@babel/preset-react', { runtime: 'automatic' }],
        '@babel/preset-typescript', // TS 처리를 위해 추가
      ],
      plugins: [
        [
          'babel-plugin-react-compiler',
          {
            /* 옵션 필요 시 추가 */
          },
        ],
      ],
      exclude: 'node_modules/**',
    }),
    // *.private 디렉토리, *.private.d.ts 파일 제거
    {
      name: 'remove-d-ts-plugin',
      generateBundle() {
        const removeFromDir = (dir) => {
          const files = fs.readdirSync(dir);
          files.forEach((file) => {
            const filePath = path.join(dir, file);
            if (fs.statSync(filePath).isDirectory()) {
              if (filePath.endsWith('.private')) {
                fs.rmSync(filePath, { recursive: true, force: true });
              } else {
                removeFromDir(filePath);
              }
            } else {
              filePath.endsWith('.private.d.ts') && fs.unlinkSync(filePath);
            }
          });
        };
        removeFromDir('./dist');
      },
    },
  ],
});

export default [getConfig()];
