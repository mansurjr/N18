const fs = require('fs');

const oldPath = './wrongFilename.txt';
const newPath = './properFilename.md';

if (!fs.existsSync(oldPath) || fs.existsSync(newPath)) {
  console.error('FS operation failed');
} else {
  fs.rename(oldPath, newPath, (err) => {
    if (err) throw err;
    console.log('File renamed!');
  });
}
