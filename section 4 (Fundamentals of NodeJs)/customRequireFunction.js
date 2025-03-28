const b = LoadModule('./math')


function LoadModule(path) {
    if ( !path.endsWith('.js')) {
        const jsPath = path.concat('.js');
        const fs = require('fs');
        const fileContent = fs.readFileSync(jsPath).toString();
        console.log(fileContent);
    }
}