// import required dependencies
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv");
const { Deta } = require("deta");
const app = express();
const http = require('http').createServer(app)
const multer  = require('multer')
const fs = require('fs')
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
let dataobj = {};
let data
dotenv.config();

const deta = Deta(process.env.PROJECT_KEY);


// application configuration
app.use(express.static("public"));


app.post('/uploads',upload.single("Data"),(req,res)=>{
    
})
data = fs.readFileSync(__dirname + "/uploads/data.csv", 'utf8');
// application routes

//var csv is the CSV file with headers
function csvJSON(csv){

  var lines=csv.split("\n");

  var result = [];

  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

      var obj = {};
      var currentline=lines[i].split(",");

      for(var j=0;j<headers.length;j++){
          obj[headers[j]] = currentline[j];
      }

      result.push(obj);

  }
  
  //return result; //JavaScript object
  return result //JSON
}
dataobj = csvJSON(data)

    console.log(dataobj[1].Name)


app.get("/", (request, response) => {
    response.sendFile(__dirname + "/Views/index.html")
});


http.listen(3000, () => {
  console.log('listening on *:3000');
});