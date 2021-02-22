// import required dependencies
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv");
const { Deta } = require("deta");

// application setup
const app = express();
dotenv.config();

const deta = Deta(process.env.PROJECT_KEY);
const rubrics = deta.Base("rubrics");

// application configuration
app.use(express.static("public"));




// application routes
app.get("/", (request, response) => {

});


// start server
app.listen(8080);