const pwd = require('./pwd');
const ls = require('./ls');
process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    //get the directory and stdout that
    pwd();
  } else if (cmd === 'ls') {
    ls();
  } else {
    process.stdout.write('not found');
    process.stdout.write('prompt > ');
  }

});

// CAN CREATE A UTILITY FUNCTION TO AVOID THE REDUNDANCY
// const done = (str) => {
//   process.stdout.write(str);
//   process.stdout.write('prompt > ');
// }
