'use strict';

const express = require(`express`);
const {DEFAULT_PORT, API_PREFIX} = require(`../../../constants`);
const routes = require(`../../api`);

const app = express();

module.exports = {
  name: `--server`,
  run: (args) => {
    const [customPort] = args;
    const port = Number.parseInt(customPort, 10) || DEFAULT_PORT;

    app.listen(port, () => {
      console.log(`Сервер принимает подключения на ${port}`);
    });

    app.use(express.json());

    app.use(API_PREFIX, routes);
  }
};
