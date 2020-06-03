// rollup.config.js
import compiler from '@ampproject/rollup-plugin-closure-compiler';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

const dev = process.env.NODE_ENV == 'development';
const watch = process.env.NODE_ENV != 'production';

export default {
  input: 'src/main.js',
  output: {
    file: 'public/bundle.js',
    format: 'umd',
    name: '<packagename>',
  },
  plugins: [
    // Minify outside of dev mode
    ...(!dev ? [
      compiler({
        compilation_level: 'ADVANCED'
      })
    ] : []),

    // Live reload in watch mode
    ...(watch ? [
      serve(),
      livereload()
    ] : [])
  ],
}
