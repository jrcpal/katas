const fs = require('fs');
const path = require('path');

function generateFileList(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    // List of files to ignore
    const ignoreFiles = [
        path.join(__dirname, 'selectRandomFile.js'),
        path.join(__dirname, 'template.js')
    ];

    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            // Recursively scan subdirectories
            generateFileList(filePath, fileList);
        } else {
            // Filter files by extension (e.g., only include .js and .ts files) and ignore specific files
            if (['.js', '.ts'].includes(path.extname(file)) && !ignoreFiles.includes(filePath)) {
                fileList.push(file);
            }
        }
    });

    return fileList;
}

const projectDir = __dirname; // Adjust this to your project directory if needed
const fileList = generateFileList(projectDir);

fs.writeFileSync('fileList.json', JSON.stringify(fileList, null, 2));
console.log('File list generated and saved to fileList.json');