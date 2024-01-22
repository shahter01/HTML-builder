const fs = require('fs');
const path = require('path');
const pathStyles = path.join(__dirname, 'styles');
const pathProjectDist = path.join(__dirname, 'project-dist');
const writeStream = fs.createWriteStream(
  path.join(pathProjectDist, 'bundle.css'),
);

fs.readdir(pathStyles, { withFileTypes: true }, (err, files) => {
  files.forEach((file) => {
    if (file.name.split('.')[1] === 'css') {
      const readFileStream = fs.createReadStream(
        path.join(pathStyles, file.name),
      );
      readFileStream.on('data', (chunk) => {
        writeStream.write(chunk.toString());
      });
    }
  });
});
