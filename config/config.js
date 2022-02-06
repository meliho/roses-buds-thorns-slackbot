require('dotenv').config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "roses_thorns_buds_dev",
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "roses_thorns_buds_test",
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "rejectUnauthorized": false,
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "roses_thorns_buds_prod",
    "host": DB_HOST,
    "dialect": "postgres"
  }
}
