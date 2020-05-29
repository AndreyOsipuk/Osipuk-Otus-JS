const fs = require('fs');
const path = require('path');
const dir = process.argv[2];
var getFiles = function (dir, shift) {
    console.log("\t".repeat(shift), path.basename(dir) + "/")
    if (shift === undefined) shift = 0;

    const files = fs.readdirSync(dir);
    for (var i in files) {
        var name = path.join(dir, files[i])
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, shift+1);
        } else {
            console.log("\t".repeat(shift), name)
        }
    }

};

getFiles(dir);