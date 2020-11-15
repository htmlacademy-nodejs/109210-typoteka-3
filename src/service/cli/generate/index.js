'use strict';

const {getRandomInt, shuffle, writeFile, generateDate} = require(`./helpers`);
const {CATEGORIES, DEFAULT_COUNT, TITLES, SENTENCES, MAX_PUBLICATION_COUNT} = require(`./constants`);
const {ExitCode} = require(`../../../constants`);

module.exports = {
  name: `--generate`,
  run(args) {
    const [count] = args;
    const advertsCount = count && count > 0 ? parseInt(count, 10) : DEFAULT_COUNT;

    if (advertsCount > MAX_PUBLICATION_COUNT) {
      console.error(`Не больше 1000 публикаций`);
      process.exit(ExitCode.ERROR);
    }

    const content = JSON.stringify(generateOffers(advertsCount));
    writeFile(content);
  }
};

const generateOffers = (count) => (
  Array(count).fill({}).map(() => ({
    title: TITLES[getRandomInt(0, TITLES.length - 1)],
    category: shuffle(CATEGORIES).slice(0, getRandomInt(1, CATEGORIES.length)),
    announce: shuffle(SENTENCES).slice(0, getRandomInt(1, 5)).join(` `),
    fullText: shuffle(SENTENCES).slice(0, getRandomInt(1, SENTENCES.length - 1)).join(` `),
    createdDate: generateDate(),
  }))
);

