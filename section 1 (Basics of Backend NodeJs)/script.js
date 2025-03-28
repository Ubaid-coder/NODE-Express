console.log('Hello Nodejs');
const fs = require('fs');




// Read File
const text = fs.readFileSync('./text.txt'); // The name of the file is no changed
const otherDirectory = fs.readFileSync('E:\\password.txt');
console.log(otherDirectory.toString());
console.log(text.toString());
console.log('End');



// Write File
const write_E = fs.writeFileSync('E:\\password.txt', 'The password is "@^%@#%#$Y&#$%^#$#$^#$%#$"')

// Rename file Name
const renamed = fs.renameSync('./change.txt', 'renamed.txt'); // If you run this second time error will come becus Fil nme chng

// Delete/unlink file Name
const delete_file = fs.unlinkSync('./renamed.txt');
