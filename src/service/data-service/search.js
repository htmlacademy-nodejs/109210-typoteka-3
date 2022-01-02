'use strict';

class SearchService {
  constructor(articles) {
    this._articles = articles;
  }

  search(query) {
    const articles = this._articles.filter((article) => article.title.search(query.query) > 0);

    return [...articles];
  }
}

module.exports = SearchService;
