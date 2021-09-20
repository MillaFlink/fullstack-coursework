
const fs = require('fs');
const path = require('path');

//Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//      if(err) throw err;
//         console.log('Folder created...');
//     });

    //Create and write to file OVERWRITES

    fs.writeFile(path.join(__dirname, '/test', '/hello.txt'),
     'Hello World!', 
     (err) => {
        if(err) throw err;
        console.log('Folder written to...');
    }
    ); 

    fs.appendFile(path.join(__dirname, '/test', '/hello.txt'),
    ' I love Node.js', 
    (err) => {
       if(err) throw err;
       console.log('Folder written to...');
   }
   ); 


