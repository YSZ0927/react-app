const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path')

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        // libraryDirectory: 'es',
        style: 'css'
    }),
    addLessLoader({
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: { '@primary-color': '#1DA57A' },
        },
    }),
    addWebpackAlias({ //路径别名
        ['@']: path.resolve(__dirname, './src'),
    }),
);