var loaderUtils = require('loader-utils');
var jsx = require('universal-jsx');

module.exports = function(source) {
  this.cacheable();

  var params = loaderUtils.parseQuery(this.query);
  if (params.harmony == 'false') {
    params.harmony = false;
  }
  if (params.precompile == 'false') {
    params.precompile = false;
  }

  var whitelist = {
    harmony: true,
    precompile: true
  };

  var unknownParams = [];
  for (var i in params) {
    if (!whitelist[i])
      unknownParams.push(i);
  }
  if (unknownParams.length) {
    var warn = unknownParams.length === 1 ?
      'universal-jsx-loader got this undocumented option: ' :
      'universal-jsx-loader got these undocumented options: ';
    warn += unknownParams.join(', ');
    this.emitWarning(warn);
  }

  return jsx.transform(source, params);
};
