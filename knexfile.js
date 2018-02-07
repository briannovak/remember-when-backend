require("dotenv").config();

module.exports = {

  development: {
    client: "pg",
    connection: "postgres://localhost/remember-when"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }

};
