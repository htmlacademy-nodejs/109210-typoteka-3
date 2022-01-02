'use strict';

const {HttpCode} = require(`../../constants`);

const articleKeys = [`category`, `announce`, `fullText`, `title`];

module.exports = (req, res, next) => {
  const newArticle = req.body || {};
  const keys = Object.keys(newArticle);

  const keysExists = articleKeys.every((key) => keys.includes(key));

  if (!keysExists) {
    res.status(HttpCode.BAD_REQUEST)
      .send(`Bad request`);
  }

  next();
};

module.exports.fieldsExist = (req, res, next) => {
  const newArticle = req.body;
  const keys = Object.keys(newArticle);
  const keysExists = keys.every((key) => articleKeys.includes(key));

  if (!keysExists) {
    res.status(HttpCode.BAD_REQUEST)
      .send(`Bad request`);
  }

  next();
};
