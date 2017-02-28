#!/usr/bin/env node
'use strict';

const program = require('commander');
const fs = require('fs');

program
  .version('0.1.0')
  .command('list {path}')
  .description('Lista las etiquetas ID3 encontradas en el path')
  .action(_list);

program.parse(process.argv);

function _list() {
  console.log(program.args[0]);
  var path = program.args[0];  //'/home/reivaj79mx/Documentos/[1987] Si Yo Fuera El';
  /*readDirectory(path)
    .then(files => console.log(files))
    .catch(error => console.log(error));*/
}

function readDirectory(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, function(error, files) {
      if (error) {
        return reject(error);
      }

      return resolve(files);
    })
  })
}
