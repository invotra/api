const fs = require('fs');

if (process.argv[2] && process.argv[3]) {
  const filename = process.argv[2];
  const contents = JSON.parse(fs.readFileSync(filename));
  contents.name = process.argv[3];
  fs.writeFileSync(filename, JSON.stringify(contents, null, 2));
  fs.appendFileSync(filename, "\n");
}
