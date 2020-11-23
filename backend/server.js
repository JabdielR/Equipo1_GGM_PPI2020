const express = require("express");
const bodyParser = require("body-parser");
let cron = require('node-cron');
const cors = require('cors');
const connection = require("./app/config/db.js");

const app = express();


app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to egresados iegamar application." });
});

require("./app/routes/usuario.routes.js")(app);


// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
