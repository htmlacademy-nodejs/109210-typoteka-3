'use strict';

module.exports.DEFAULT_COMMAND = `--help`;

module.exports.DEFAULT_PORT = 3000;

module.exports.API_PREFIX = `/api`;

module.exports.MOCK_FILE_NAME = `mocks.json`;

module.exports.USER_ARGV_INDEX = 2;

module.exports.ExitCode = {
  ERROR: 1,
  SUCCESS: 0,
};

module.exports.HttpCode = {
  OK: 200,
  CREATED: 201,
  UPDATED: 204,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};

module.exports.ErrorCodes = {
  ENOENT: `ENOENT`
};
