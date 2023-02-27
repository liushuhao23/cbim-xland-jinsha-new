/* eslint-disable no-param-reassign */
/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-09-26 16:25:25
 * @LastEditors: liushuhao
 * @LastEditTime: 2023-02-27 09:19:33
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageName = require('./package.json').name;

const resolve = (dir) => path.join(__dirname, dir);

// const resolve = (dir) => join(__dirname, dir);
const isDev = process.env.NODE_ENV === 'development';
const outputDir = process.env.VUE_APP_OUTPUT_DIR;
const publicPath = process.env.VUE_APP_PUBLIC_PATH;

const port = 8081;

module.exports = {
  lintOnSave: isDev,
  publicPath,
  // publicPath:`//localhost:${port}`,
  outputDir,
  indexPath: 'index.html',
  productionSourceMap: false,
  configureWebpack: (config) => {
    const optimization = {
      runtimeChunk: {
        name: 'runtime',
      },
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendors: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'initial',
          },
          common: {
            name: 'chunk-common',
            minChunks: 2,
            priority: -20,
            chunks: 'all',
            reuseExistingChunk: true,
          },
        },
      },
    };
    const output = {
      // 微应用的包名，这里与主应用中注册的微应用名称一致
      library: `${packageName}-[name]`,
      // 将你的 library 暴露为所有的模块定义下都可运行的方式
      libraryTarget: 'umd',
      // 按需加载相关，设置为 webpackJsonp_包名 即可
      jsonpFunction: `webpackJsonp_${packageName}`,
    };
    Object.assign(config.output, output);
    Object.assign(config.optimization, optimization);
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'));
    if (!isDev) {
      // 生产环境生效 去掉console debugger
      config.optimization.minimizer('terser').tap((args) => {
        args[0].terserOptions.compress.warnings = false;
        args[0].terserOptions.compress.drop_console = true;
        args[0].terserOptions.compress.drop_debugger = true;
        args[0].terserOptions.compress.pure_funcs = ['console.log'];
        return args;
      });
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  devServer: {
    open: true,
    port,
    // 关闭主机检查，使微应用可以被 fetch
    disableHostCheck: true,
    // 配置跨域请求头，解决开发环境的跨域问题
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    hot: true,
    proxy: {
      '/api': {
        // target: 'https://xland-test.cbim.org.cn/kunlun/datacenter', // test
        target: 'https://xland-dev.cbim.org.cn/kunlun/datacenter', // dev
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          '/api': '/',
        },
      },
    },
  },
};
