'use strict';

const {nanoid} = require(`nanoid`);
const {MAX_ID_LENGTH} = require(`../cli/generate/constants`);

class CommentService {
  constructor() {
  }

  findAll(article) {
    return article.comments;
  }

  findOne(article, id) {
    return article.comments.find((item) => item.id === id);
  }

  drop(article, commentId) {
    const comments = article.comments.filter((comment) => comment.id !== commentId);
    return {
      ...article,
      comments
    };
  }

  create(article, comment) {
    const newComment = {
      id: nanoid(MAX_ID_LENGTH),
      ...comment
    };

    return {
      ...article,
      comments: [...article.comments, newComment]
    };
  }
}

module.exports = CommentService;
