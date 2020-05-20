const express = require("express");

const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

const db = require("./models")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/contactdb");

app.post("/api/message", ({ body }, res) => {
	console.log(body)
	db.Message.create(body)
	  .then(dbMessage => {
		res.json(dbMessage);
	  })
	  .catch(err => {
		res.json(err);
	  });
  });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
