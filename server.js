const express = require("express");
const router = express.Router()
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
require("dotenv").config()

const app = express();

mongoose.connect(process.env.REACT_APP_MONGO_URI, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', errorMsg => console.log(errorMsg))
db.once('open', () => console.log('Connected'))

app.use(bodyParser.json());

app.use(
  cookieSession({
    // 30 days
    maxAge: (30 * 24 * 60 * 60 * 1000),
    keys: [process.env.REACT_APP_COOKIES_KEY]
  })
);

if (process.env.NODE_ENV === "production") {
    // Express will serve prod assets
    app.use(express.static("./client/build"))
  
    // Express will serve up the index.html file
    app.get("/*", (req, res) => {
      res.sendFile("index.html", { root: __dirname + "/client/build/"});
    });
  }
  
  
  const PORT = process.env.PORT || 5000;
  app.listen(PORT);
  