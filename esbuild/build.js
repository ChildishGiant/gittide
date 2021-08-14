const esbuild = require('esbuild')
const sassPlugin = require('esbuild-plugin-sass')

esbuild.build({
  entryPoints: ['src/index.js'],
  bundle: true,
  outfile: 'docs/bundle.js',
  sourcemap: true,
  platform: "browser",
  plugins: [sassPlugin()],
  loader: {".ejs":"text"},
})
