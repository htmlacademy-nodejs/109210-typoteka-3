'use strict';

const {HttpCode} = require(`../../constants`);

module.exports.commentValidator = (req, res, next) => {
  const newComment = req.body;
  if (!newComment.text) {
    res.status(HttpCode.BAD_REQUEST)
      .send(`Bad request`);
  }

  next();
};
