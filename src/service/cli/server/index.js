'use strict';

const chalk = require(`chalk`);
const http = require(`http`);
const {onClientConnect} = require(`./onClientConnect`);
const {DEFAULT_PORT} = require(`../../../constants`);

module.exports = {
  name: `--server`,
  run: (args) => {
    const [customPort] = args;
    const port = Number.parseInt(customPort, 10) || DEFAULT_PORT;

    http.createServer(onClientConnect)
      .listen(port)
      .on(`listening`, (err) => {
        if (err) {
          return console.error(`Ошибка при создании сервера`, err);
        }

        return console.info(chalk.green(`Ожидаю соединений на ${port}`));
      });
  }
};
