const fs = require('fs');
const path = require('path');

function deleteDir(url) {
    if (fs.existsSync(url)) {
        const files = fs.readdirSync(url);
        files.forEach(function (file) {
            var curPath = path.join(url, file);

            if (fs.statSync(curPath).isDirectory()) {
                deleteDir(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });

        fs.rmdirSync(url);
    } else {
        console.log('目錄不存在');
    }
}

deleteDir('./dist');
