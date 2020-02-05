const { override, fixBabelImports } = require('customize-cra')

const getConfig = () => config => {
  // 去掉sourcemap
  config.devtool = false
  // 使用eslintrc
  config.module.rules[1].use[0].options.useEslintrc = true
  return config
}

module.exports = override(
  // ant按需引入
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  getConfig()
)