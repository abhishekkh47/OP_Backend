const fs = require('fs').promises;

fs.readFile(__dirname + '/data.txt', 'utf8').then(contents => {
    try {
        const wordCount = contents.split(' ').filter(function (num) { return num != '' }).length
        console.log(wordCount);
    } catch (e) {
        console.log(`Error occurred : ${e.message}`);
    }
})