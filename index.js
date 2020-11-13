// const path = require("path")
const withTM = require("next-transpile-modules")
const withAntdLess = require("next-plugin-antd-less")

const antdRelatedPackages = [
  "antd",

  "@ant-design/pro-table",
  "@ant-design/pro-layout",
  "@ant-design/pro-form",
  "@ant-design/pro-field",
  "@ant-design/pro-descriptions",
  "@ant-design/pro-utils",
  "@ant-design/pro-card",
  "@ant-design/pro-list",
  "@ant-design/pro-skeleton",
  "@ant-design/pro-provider",

  "@ant-design/css-animation",
  "@ant-design/icons",
  "@ant-design/icons-svg",
  "@ant-design/colors",
  "@ant-design/react-slick",
  "@ant-design/icons-react",
  "@ant-design/compatible",
  "@ant-design/form",

  "rc-notification",
  "rc-pagination",
  "rc-picker",
  "rc-util",
  "rc-tooltip",
  "rc-field-form",
]

module.exports = withTM(antdRelatedPackages)
