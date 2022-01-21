const shelljs = require("shelljs");

function copyFile() {
  shelljs.cp("R", ["package.json", "README.md", "LICENSE"], "dist");
}

copyFile();
