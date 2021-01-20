'use strict';

const fs = require(`fs`).promises;

const {ErrorCodes} = require(`../../../constants`);
const {MOCK_FILE_NAME} = require(`../../../constants`);

module.exports.postsController = async (req, res) => {
  try {
    const fileContent = await fs.readFile(MOCK_FILE_NAME);
    const mocks = JSON.parse(fileContent);
    res.json(mocks);
  } catch (err) {
    if (err.code === ErrorCodes.ENOENT) {
      res.json([]);
    } else {
      res.json(err);
    }
  }
};
