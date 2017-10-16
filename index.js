const readingTime = require('reading-time');
const fs = require('fs');
const path = require('path');

fs.readdir('.', (err, files) => {
  files.map( file => {
    fs.stat(file, (err, stats) =>{
      if(stats.isFile() && path.extname(file) === '.md'){
        fs.readFile(file,'utf8', (err, content) =>{
          const readStats = readingTime(content);
          console.log(file + ' => (' + readStats.text + ')');
        });
      }
    });
  });
});
