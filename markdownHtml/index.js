const utils = require('loader-utils');
const TurndownService = require('turndown');
module.exports = function (source) {
  console.log(source);
  const options = utils.getOptions(this);
  const turndownService = new TurndownService(options);
  const markdown = turndownService.turndown(source);
  const code = `module.exports = ${JSON.stringify(markdown)}`;
  return code;
};
