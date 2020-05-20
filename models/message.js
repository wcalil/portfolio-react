const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  emailAdress: {
    type: String,
    required: true
  },
  message: {
    String
  }
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
