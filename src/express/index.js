
'use strict';

const express = require(`express`);

const app = express();

const DEFAULT_PORT = 8080;

const {mainRoutes, myRoutes, articlesRoutes} = require(`./routes`);

app.use(`/articles`, articlesRoutes);
app.use(`/my`, myRoutes);
app.use(`/`, mainRoutes);

app.listen(DEFAULT_PORT);
