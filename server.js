// import required dependencies
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv");
const { Deta } = require("deta");
const app = express();
const http = require('http').createServer(app)
const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
const upload = multer({storage})
// application setup

dotenv.config();

const deta = Deta(process.env.PROJECT_KEY);


// application configuration
app.use(express.static("public"));


app.post('/uploads',upload.single("Data"),(req,res)=>{
    console.log(req.body);
})

// application routes
app.get("/", (request, response) => {
    response.sendFile(__dirname + "/Views/index.html")
});


http.listen(3000, () => {
  console.log('listening on *:3000');
});