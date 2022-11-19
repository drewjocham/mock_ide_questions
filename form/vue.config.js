const { defineConfig } = require('@vue/cli-service')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
    chainWebpack: config => {
        config.plugin('monaco-editor').use(MonacoWebpackPlugin, [
            {
                // Languages are loaded on demand at runtime
                languages: ['json', 'javascript', 'html', 'xml', 'python', 'java', 'go']
            },
            new NodePolyfillPlugin()
        ])
    }
})
