import axios from "./node_modules/axios";

export default {
  saveMessage: function(messageData) {
    return axios.post("/api/message", messageData);
  }
};
