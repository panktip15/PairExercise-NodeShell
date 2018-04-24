const fs = require('fs');

module.exports = () => {
  let ret = fs.readdirSync('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
      return files;
    }
  });
  return ret.join('\t');
};
