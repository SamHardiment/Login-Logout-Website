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

  static create(username, email, password) {
    return new Promise(async (res, rej) => {
      try {
        let result = await db.query(
          "INSERET INTO users (username, email, password_digest) VALUES ($1, $2, $3) RETURNING *;",
          [username, email, password]
        );
        let user = new User(result.rows[0]);
        res(user);
      } catch (err) {
        rej(`Something went wrong: ${err}`);
      }
    });
  }
};
