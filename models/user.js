const {Schema, model} = require("mongoose");
const {dbConnection} = require('../config/db');

const userSchema = Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String
    }
  }
)

const User = dbConnection.model('User',userSchema );

module.exports = {
  User
}