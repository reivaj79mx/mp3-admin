const fs = require('fs');
const _ = require('lodash');

module.exports = {

  /**
   * Devuelve el contenido de el directorio especificado
   * @param {string} directory - Ubicacion del directorio
   * @returns {Promise} Contenido del directorio
   */
  readDirectory: (directory) => {
    return new Promise((resolve, reject) => {
      fs.readdir(directory, (error, files) => {
        if (error) reject(error);
        resolve(files);
      });
    });
  },

  /**
   * Devuelve el contenido del archivo especificado
   * @param {string} file - Ubicacion del archivo
   * @returns {Promise} Contenido del archivo
   */
  readFile: (file) => {
    return new Promise((resolve, reject) => {
      fs.readFile(file, (error, data) => {
        if (error) reject(error);
        resolve(data);
      });
    });
  }

}