'use strict';

const express = require(`express`);
const {HttpCode} = require(`../../constants`);
const articleValidator = require(`../midlewares/articleValidator`);
const articleExist = require(`../midlewares/articleExist`);
const commentExist = require(`../midlewares/commentExist`);
const {commentValidator} = require(`../midlewares/commentValidator`);
const {fieldsExist} = require(`../midlewares/articleValidator`);
const route = new express.Router();

module.exports = (app, service, commentService) => {
  app.use(`/articles`, route);

  route.get(`/`, async (req, res) => {
    const categories = await service.findAll();
    res.status(HttpCode.OK)
      .json(categories);
  });

  route.get(`/:articleId`, (req, res) => {
    const {articleId} = req.params;
    const article = service.findOne(articleId);

    if (!article) {
      return res.status(HttpCode.NOT_FOUND)
        .send(`Not found with ${articleId}`);
    }

    return res.status(HttpCode.OK)
      .json(article);
  });

  route.post(`/`, articleValidator, (req, res) => {
    const article = service.create(req.body);

    return res.status(HttpCode.CREATED)
      .json(article);
  });

  route.put(`/:articleId`, [articleExist(service), fieldsExist], (req, res) => {
    const {articleId} = req.params;
    const article = service.update(articleId, req.body);

    return res.status(HttpCode.UPDATED)
      .json(article);
  });

  route.delete(`/:articleId`, [articleExist(service)], (req, res) => {
    const {articleId} = req.params;
    const article = service.drop(articleId);

    return res.status(HttpCode.OK)
      .json(article);
  });

  route.get(`/:articleId/comments`, articleExist(service), (req, res) => {
    const {article} = res.locals;

    const comments = commentService.findAll(article);

    return res.status(HttpCode.OK).json(comments);
  });

  route.delete(`/:articleId/comments/:commentId`, [articleExist(service), commentExist(commentService)], (req, res) => {
    const {commentId} = req.params;
    const {article} = res.locals;

    const newArticle = commentService.drop(article, commentId);

    return res.status(HttpCode.UPDATED).json(newArticle);
  });

  route.post(`/:articleId/comments`, [articleExist(service), commentValidator], (req, res) => {
    const {article} = res.locals;
    const newArticle = commentService.create(article, req.body);

    return res.status(HttpCode.CREATED).json(newArticle);
  });
};
