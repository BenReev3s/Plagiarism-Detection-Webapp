const path = require('path');
const fs = require('fs');
const stringSimilarity = require('string-similarity');

function compareFiles() {
// get a list of path names
  const files = fs.readdirSync('uploads/');
  // sorts files in order of most recent.
  files.sort(function (x, y) {
    return fs.statSync('uploads/' + y).mtime.getTime() -
    fs.statSync('uploads/' + x).mtime.getTime();
  });
  console.log(files);

  // sorting files into most recent


  // console.log(files);

  const pathArr = [];
  for (let i = 0; i < files.length; i++) {
    const filePath = path.join(files[i]);
    pathArr[i] = 'uploads' + '/' + filePath;
  // console.log(pathArr[i]);
  }

  // readfile sync in loop using the path array to create a list of files data in strin
  const dataArr = [];
  for (let i = 0; i < files.length; i++) {
    const dataString = fs.readFileSync(pathArr[i], 'utf-8');
    dataArr[i] = dataString;
  }


  const original = dataArr.shift();
  // dataArr.shift();
  const targetFiles = dataArr;

  // the most recent file is compared against the remaining files
  console.log('The original file: ' + '\n' + original);
  const similarity = stringSimilarity.findBestMatch(original, targetFiles);
  console.log(similarity);
  // used to delete all files after
  // deleteFiles(pathArr);
  return similarity;
}

function deleteFiles(path) {
  for (let i = 0; i < path.length; i++) {
    fs.unlink(path[i], (err) => {
      if (err) {
        console.error(err);
      }

      // file removed
    });
  }
}
// compareFiles();

module.exports = compareFiles;
