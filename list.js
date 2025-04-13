const fs = require('fs');
const folder = './files';

if (!fs.existsSync(folder)) {
  console.error('FS operation failed');
} else {
  fs.readdir(folder, (err, files) => {
    if (err) throw err;
    console.log('Files:', files);
  });
}
