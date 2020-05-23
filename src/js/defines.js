const SERVER_URL = '';

const KEY = {
  ACCESS_TOKEN: '@access_token',
  REFRESH_TOKEN: '@refresh_token'
}

const ERROR_CODE = {
  COMMON_ERROR: -1,
  OK: 0,
  USERNAME_ALREADY_OCCUPIED: 11,
  EMAIL_ALREADY_OCCUPIED: 12,
  NO_SUCH_USER: 13,
  PASSWORD_WRONG: 14,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  TOKEN_EXPIRED: 419,
};

export {
  SERVER_URL,
  KEY,
  ERROR_CODE
};
