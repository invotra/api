const baseBranch = process.argv[2];
const regex = /(\d+\.\d+(\.\d+)?)(-[\w\d]+)?$/;

let newVersion = '0.0.0';

let matches = regex.exec(baseBranch);
if (matches[1]) {
  const versionParts = matches[1].split('.');
  if (versionParts.length === 2) {
    versionParts.push('0');
  }
  newVersion = versionParts.join('.');
  if (matches[3]) {
    newVersion += matches[3];
  }
  if (process.argv[3] && process.argv[3].length) {
    newVersion += `-${process.argv[3]}`;
  }
}

console.log(newVersion);
