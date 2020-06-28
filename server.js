const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
const PORT = process.env.PORT || 3100;
const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://sochikenny:Fairfield19@ds151108.mlab.com:51108/heroku_jcbcchg9", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(logger("dev"));
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});