'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Response extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Response.hasOne(User, {as: 'user'});
      Response.hasOne(Question, {as: 'question'});
    }
  }
  Response.init({
    response: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    question_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Response',
  });
  return Response;
};
