const cookies = require('js-cookie');

class persist {
  static get ACCESS_TOKEN_KEY() {
    return 'accessToken';
  }

  static async willGetAccessToken() {
    return cookies.get(persist.ACCESS_TOKEN_KEY);
  }

  static async willSetAccessToken(value) {
    return cookies.set(persist.ACCESS_TOKEN_KEY, value);
  }

  static async willRemoveAccessToken() {
    return cookies.remove(persist.ACCESS_TOKEN_KEY);
  }

  // username cookie
  static get USERNAME_KEY() {
    return 'username';
  }

  static async willGetUsername() {
    return cookies.get(persist.USERNAME_KEY);
  }

  static async willSetUsername(value) {
    console.log('willSetUsername was called');
    return cookies.set(persist.USERNAME_KEY, value);
  }

  static async willRemoveUsername() {
    return cookies.remove(persist.USERNAME_KEY);
  }
}

module.exports = persist;
