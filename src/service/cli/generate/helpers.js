'use strict';

const fs = require(`fs`);
const {FILE_NAME} = require(`./constants`);

const getRandomInt = (_min, _max) => {
  const min = Math.ceil(_min);
  const max = Math.floor(_max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateDate = () => {
  const nowTimestamp = Date.now();
  const nowDate = new Date(nowTimestamp);
  const pastCriticalTimestamp = nowDate.setMonth(nowDate.getMonth() - 3);
  const date = new Date(getRandomInt(nowTimestamp, pastCriticalTimestamp));
  return date.toLocaleString();
};

const shuffle = (_array) => {
  const array = [..._array];

  for (let i = array.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [array[i], array[randomPosition]] = [array[randomPosition], array[i]];
  }

  return array;
};

const writeFile = (content) => {
  fs.writeFile(FILE_NAME, content, (err) => {
    if (err) {
      return console.error(`Can't write data to file...`);
    }

    return console.info(`Operation success. File created.`);
  });
};

module.exports = {
  writeFile,
  getRandomInt,
  shuffle,
  generateDate
};
