const esbuild = require('esbuild')
const FiveServer = require('five-server').default
const sassPlugin = require('esbuild-plugin-sass')

esbuild.build({
  entryPoints: ['src/index.js'],
  bundle: true,
  outfile: 'public/bundle.js',
  sourcemap: true,
  platform: "browser",
  plugins: [sassPlugin()],
  loader: {".ejs":"text"},
  watch: {
    onRebuild (error, result) {
      if (error) console.error('watch build failed:', error)
      else console.error('watch build succeeded:', result)
    }
  }
}).then(result => {
  // Call "stop" on the result when you're done
  console.log(result)

  new FiveServer().start({
    root: './public',
    open: true,
    port: 1234
  })

})
