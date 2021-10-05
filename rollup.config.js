const pkg = require('./package.json')
const { nodeResolve } = require('@rollup/plugin-node-resolve')

export default [
  {
    input: './dist/index.js',
    plugins: [nodeResolve()],
    output: [
      {
        file: './dist/bundled.js',
        format: 'es'
      }
    ]
  },
  {
    input: './test/assert.js',
    plugins: [ nodeResolve() ],
    output: [{
      file: './dist/bundled.test.js',
      format: 'es'
    }],
  }
]
