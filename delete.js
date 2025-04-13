const fs = require('fs');
const path = './fileToRemove.txt';

if (!fs.existsSync(path)) {
  console.error('FS operation failed');
} else {
  fs.unlink(path, (err) => {
    if (err) throw err;
    console.log('File deleted!');
  });
}
