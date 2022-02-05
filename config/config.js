require('dotenv').config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

module.exports = {
  "development": {
    "username": "melih",
    "password": null,
    "database": "roses_thorns_buds",
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": "melih",
    "password": null,
    "database": "roses_thorns_buds_test",
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "database_production",
    "host": DB_HOST,
    "dialect": "postgres"
  }
}
