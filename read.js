const fs = require('fs');
const path = './fileToRead.txt';

if (!fs.existsSync(path)) {
  console.error('FS operation failed');
} else {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('Content:', data);
  });
}
