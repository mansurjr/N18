const fs = require('fs');

function writeNumbers() {
  let numbers = '';
  for (let i = 0; i < 100; i++) {
    numbers += Math.floor(Math.random() * 100) + '\n';
  }

  fs.writeFile('sonlar.txt', numbers, (err) => {
    if (err) throw err;
    console.log('Numbers written!');
    readNumbers();
  });
}

function readNumbers() {
  fs.readFile('sonlar.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    const array = data.trim().split('\n').map(Number);
    console.log(array);
  });
}

writeNumbers();
