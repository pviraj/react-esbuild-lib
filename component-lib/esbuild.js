const esbuild = require('esbuild');
const { globPlugin } = require('esbuild-plugin-glob');
const { nodeExternalsPlugin } = require('esbuild-node-externals');
const { dependencies, peerDependencies } = require('./package.json');

esbuild.build({
    entryPoints: ['src/**/index.ts'],
    outdir: 'dist',
    bundle: true,
    sourcemap: true,
    format: 'esm',
    target: ['es6'],
    plugins: [
        globPlugin(),
        nodeExternalsPlugin()
    ],
    external: [].concat.apply([], [Object.keys(dependencies), Object.keys(peerDependencies)])
})
.then(async(result) => {
    console.log('Build complete')
})
.catch(() => process.exit(1));