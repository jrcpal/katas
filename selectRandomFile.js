const fs = require('fs');
const path = require('path');

function getRandomFile() {
    const fileList = JSON.parse(fs.readFileSync('fileList.json'));
    let selectedFiles = [];

    if (fs.existsSync('selectedFiles.json')) {
        selectedFiles = JSON.parse(fs.readFileSync('selectedFiles.json'));
    }

    const remainingFiles = fileList.filter(file => !selectedFiles.includes(file));

    if (remainingFiles.length === 0) {
        console.log('All files have been selected. Resetting the list.');
        selectedFiles = [];
        fs.writeFileSync('selectedFiles.json', JSON.stringify(selectedFiles, null, 2));
        return getRandomFile();
    }

    const randomFile = remainingFiles[Math.floor(Math.random() * remainingFiles.length)];
    selectedFiles.push(randomFile);
    fs.writeFileSync('selectedFiles.json', JSON.stringify(selectedFiles, null, 2));

    return randomFile;
}

console.log('Randomly selected file:', getRandomFile());