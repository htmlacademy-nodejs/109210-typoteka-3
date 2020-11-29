'use strict';

const fs = require(`fs`).promises;
const chalk = require(`chalk`);
const {FILE_NAME} = require(`./constants`);

const getRandomInt = (min, max) => {
  const _min = Math.ceil(min);
  const _max = Math.floor(max);
  return Math.floor(Math.random() * (_max - _min + 1)) + _min;
};

const generateDate = () => {
  const nowTimestamp = Date.now();
  const nowDate = new Date(nowTimestamp);
  const pastCriticalTimestamp = nowDate.setMonth(nowDate.getMonth() - 3);
  const date = new Date(getRandomInt(nowTimestamp, pastCriticalTimestamp));
  return date.toLocaleString();
};

const shuffle = (array) => {
  const _array = [...array];

  for (let i = _array.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [_array[i], _array[randomPosition]] = [_array[randomPosition], _array[i]];
  }

  return _array;
};

const writeFile = async (content) => {
  try {
    await fs.writeFile(FILE_NAME, content);
    console.log(chalk.green(`Operation success. File created.`));
  } catch (err) {
    console.error(chalk.red(`Can't write data to file...`));
  }
};

module.exports = {
  writeFile,
  getRandomInt,
  shuffle,
  generateDate
};
