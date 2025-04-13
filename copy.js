const fs = require('fs');
const path = require('path');

const source = './files';
const destination = './files_copy';

if (!fs.existsSync(source) || fs.existsSync(destination)) {
  console.error('FS operation failed');
} else {
  fs.cp(source, destination, { recursive: true }, (err) => {
    if (err) throw err;
    console.log('Folder copied!');
  });
}
