#!/usr/bin/env node
'use strict';

const program = require('commander');
const id3 = require('id3-parser');
const _ = require('lodash');

const fops = require('./lib/fs-oper');

program
  .version('0.1.0')
  .command('scan [path]')
  .description('Lista las etiquetas ID3 encontradas en el path')
  .action(scan);

program.parse(process.argv);

function scan(path) {
  if (!path) path = '.';

  fops.readDirectory(path).then((files) => {
    return _.filter(files, (file) => { 
      return _.endsWith(file, '.mp3'); 
    });
  }).then((files) => {
    return Promise.all(_.map(files, (file) => {
      return fops.readFile(file);
    }));
  }).then((datas) => {
    return Promise.all(_.map(datas, (data) => {
      return id3.parse(data);
    }))
  }).then((tags) => {
    let artist = _.groupBy(tags, (tag) => {
      return tag.artist;
    })

    console.log(x);
  })
}