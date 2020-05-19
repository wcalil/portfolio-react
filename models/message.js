var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");
const Schema = sequelize.Schema;

const messageSchema = new Schema({
  name: { type: String, required: true },
  emailAdress: { type: String, required: true },
  message: String,
});

const Message = sequelize.model("Message", messageSchema);

module.exports = Message;

