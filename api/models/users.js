const db = require("../dbconfig");

module.exports = class User {
  constructor(data) {
    this.username = data.username;
    this.email = data.email;
    this.passwordDigest = data.password_digest;
  }

  static get all() {
    return new Promise(async (res, rej) => {
      try {
        const results = await db.query("SELECT * FROM users;");
        const users = results.rows.map((r) => new User(r));
        res(users);
      } catch (err) {
        rej(`Error retrieving users: ${err}`);
      }
    });
  }
};
