process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  let pwd = "";
  if(cmd === 'pwd'){
    //get the directory and stdout that
    pwd = __dirname;
  }


  process.stdout.write(pwd);
  process.stdout.write('\nprompt > ');
})

