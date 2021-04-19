const svgr = require('@svgr/rollup').default;
const url = require('@rollup/plugin-url');

module.exports = {
  rollup(config) {
    config.plugins.unshift(svgr());
    config.plugins.unshift(url());
    return config;
  },
};
