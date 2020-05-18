var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3301,
  user: "root",
  password: "password",
  database: "portfolio"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  sendMessage();
});

function sendMessage() {
  console.log("Inserting a new product...\n");
  var query = connection.query(
    "INSERT INTO portfolio SET ?",
    {
      name: "",
      emailAdress: "",
      message: ""
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " message sent!\n");
    }
  );

}
