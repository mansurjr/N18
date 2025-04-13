const fs = require('fs');
const path = './files/fresh.txt';

fs.access(path, fs.constants.F_OK, (err) => {
  if (!err) {
    console.error('FS operation failed');
  } else {
    fs.writeFile(path, 'I am fresh and young', (err) => {
      if (err) throw err;
      console.log('File created!');
    });
  }
});
