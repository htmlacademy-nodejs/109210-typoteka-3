
'use strict';

const help = require(`./help`);
const version = require(`./version`);
const generate = require(`./generate`);

const Cli = [help, version, generate].reduce((result, current) => {
  result[current.name] = current;
  return result;
}, {});

module.exports = {
  Cli,
};
