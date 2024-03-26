const mongoose = require("mongoose");

function DbConnection() {
  const DB_URL = process.env.MONGO_URL;

  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

const db = mongoose.connection;
db.on("error ", console.error.bind(console, "connection error: "));

db.once("open", function () {
  console.log("database connected");
});
module.exports = DbConnection;
