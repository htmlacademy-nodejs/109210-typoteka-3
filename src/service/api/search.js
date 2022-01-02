'use strict';

const express = require(`express`);
const {HttpCode} = require(`../../constants`);

const route = new express.Router();

module.exports = (app, service) => {
  app.use(`/search`, route);

  route.get(`/`, async (req, res) => {
    const query = req.query;
    const articles = await service.search(query);

    if (articles.length === 0) {
      return res.status(HttpCode.NOT_FOUND).json(articles);
    }

    return res.status(HttpCode.OK)
      .json(articles);
  });
};
