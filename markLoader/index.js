const marked = require('marked');
const utils = require('loader-utils')
module.exports = function (source) {
  const options = utils.getOptions(this)
  const html = marked(source,options);
  // const code = `module.exports = ${JSON.stringify(html)}`;
  return html;
};
