'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(Response, {as: 'responses'})
    }

    static uninstall(slackInstance) {
      User.update(
        {
          active: false
        },
        {
          where: {
            slack_instance: slackInstance
          }
        }
      );
    }
  }
  User.init({
    name: DataTypes.STRING,
    slack_instance: DataTypes.STRING,
    timezone: DataTypes.STRING,
    ask_time: DataTypes.NUMBER,
    recap_time: DataTypes.NUMBER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
