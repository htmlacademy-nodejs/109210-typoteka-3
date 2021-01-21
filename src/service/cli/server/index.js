'use strict';

const express = require(`express`);
const router = new express.Router();
const {DEFAULT_PORT} = require(`../../../constants`);
const {postsController} = require(`./postsController`);

const app = express();

router.get(`/posts`, postsController);

module.exports = {
  name: `--server`,
  run: (args) => {
    const [customPort] = args;
    const port = Number.parseInt(customPort, 10) || DEFAULT_PORT;

    app.listen(port, () => {
      console.log(`Сервер принимает подключения на ${port}`);
    });

    app.use(express.json());

    app.use(router);
  }
};
