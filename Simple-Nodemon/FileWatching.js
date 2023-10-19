function watchFile(filePath) {
  const fs = require("fs");
  fs.watch(filePath, (e, filename) => {
    if (e === "change") {
      console.log(`File ${filename} changed`);
    } else if (e === "rename") {
      console.log(`file name changed`);
    }
  });
}

const filepath = __dirname + "/index.js";
watchFile(filepath);

/*
File watching algo in js
*/
