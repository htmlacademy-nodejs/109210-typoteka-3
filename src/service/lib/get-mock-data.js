'use strict';

const {MOCK_FILE_NAME} = require(`../../constants`);
const fs = require(`fs`).promises;
let data = [];

const getMockData = async () => {
  if (data.length > 0) {
    return data;
  }

  try {
    const fileContent = await fs.readFile(MOCK_FILE_NAME);
    data = JSON.parse(fileContent);
  } catch (err) {
    console.log(err);
    return (err);
  }

  return data;
};

module.exports = getMockData;
