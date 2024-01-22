const process = require('process');
const fs = require('fs');
const writeStream = fs.createWriteStream(__dirname + '/text.txt');
const { stdin, stdout } = process;

stdout.write('Enter ur text \n');

stdin.on('data', (data) => {
  if (data.toString().toLocaleLowerCase().trim() === 'exit') {
    process.exit(console.log('Good bue!'));
  } else {
    writeStream.write(data.toString());
  }
});

process.on('SIGINT', () => {
  process.exit(console.log('гуд бай'));
});
