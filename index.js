#!/usr/bin/env node
'use strict';

const program = require('commander');
const fs = require('fs');
const id3 = require('id3-parser');
const _ = require('lodash');

const x = require('./lib/fs-oper');

program
  .version('0.1.0')
  .command('list {path}')
  .description('Lista las etiquetas ID3 encontradas en el path')
  .action(_list);

program.parse(process.argv);

function _list() {
  var directory = program.args[0];
  x.readDirectory(directory).then(files => {
    console.log(files);
  });  

  /*readDirectory(path).then(files => { 
      _.forEach(files, file => {
        if (_.endsWith(file, '.mp3')) {
          readFile(`${path}/${file}`).then((data) => {
            id3.parse(data).then(tags => {
              console.log(tags.track, tags.title);
            });
          });
        }
      })
    }).catch(error => console.log(error));*/
}



function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (error, data) => {
      if (error) {
        return reject(error);
      }

      return resolve(data);
    });
  })
}
