const fs = require('fs');

module.exports = {

  readDirectory: (directory) => {
    return new Promise((resolve, reject) => {
      fs.readdir(directory, (error, files) => {
        if (error) reject(error);

          resolve(files);
      });
    });
  }

}