'use strict';

const express = require(`express`);
const CategoryService = require(`../data-service/category`);
const category = require(`./categories`);
const article = require(`./articles`);
const search = require(`./search`);
const getMockData = require(`../lib/get-mock-data`);
const ArticleService = require(`../data-service/article`);
const CommentService = require(`../data-service/comment`);
const SearchService = require(`../data-service/search`);
const app = new express.Router();

(async () => {
  const mockData = await getMockData();

  category(app, new CategoryService(mockData));
  search(app, new SearchService(mockData));
  article(app, new ArticleService(mockData), new CommentService());
})();

module.exports = app;
