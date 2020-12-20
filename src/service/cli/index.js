
'use strict';

const help = require(`./help`);
const version = require(`./version`);
const generate = require(`./generate`);
const server = require(`./server`);

const Cli = [help, version, generate, server].reduce((result, current) => {
  result[current.name] = current;
  return result;
}, {});

module.exports = {
  Cli,
};
