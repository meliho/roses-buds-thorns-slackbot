require('dotenv').config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": null,
    "database": "roses_thorns_buds",
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": DB_USERNAME,
    "password": null,
    "database": "roses_thorns_buds_test",
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "d8qoonbn1n18as",
    "host": DB_HOST,
    "dialect": "postgres"
  }
}
