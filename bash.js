const pwd = require('./pwd');
const ls = require('./ls');
process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  let output = '';
  if (cmd === 'pwd') {
    //get the directory and stdout that
    output = pwd();
  } else if (cmd === 'ls') {
    output = ls();
  }

  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
});
