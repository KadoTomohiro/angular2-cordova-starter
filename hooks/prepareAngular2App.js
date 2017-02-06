const fs = require('fs');

module.exports = function(context) {
  console.log('--> Removing *.gz files from www directory.');
  const basePath = context.opts.projectRoot;
  const baseWWW = basePath + '/www';

  var files = fs.readdirSync(baseWWW);
  for (var i = 0; i < files.length; i++) {
    if (files[i].endsWith('.gz')) {
      fs.unlinkSync(baseWWW + '/' + files[i]);
    }
  }
};
