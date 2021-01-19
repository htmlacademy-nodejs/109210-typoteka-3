'use strict';

const express = require(`express`);
const path = require(`path`);

const {HttpCode} = require(`../constants`);

const app = express();

const DEFAULT_PORT = 8080;
const PUBLIC_DIR = `public`;

const {mainRoutes, myRoutes, articlesRoutes} = require(`./routes`);

app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));

app.set(`views`, path.resolve(__dirname, `templates`));
app.set(`view engine`, `pug`);

app.use(`/articles`, articlesRoutes);
app.use(`/my`, myRoutes);
app.use(`/`, mainRoutes);

app.use((req, res) => res.status(HttpCode.NOT_FOUND).render(`errors/404`));
app.use((err, _req, res, _next) => {
  res.status(HttpCode.INTERNAL_SERVER_ERROR).render(`errors/500`);
});

app.listen(DEFAULT_PORT);
