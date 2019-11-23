const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const cors = require('cors');
const env = require('dotenv/config');
const MongoDB = require('mongodb').MongoClient;
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// changed path to public but it should be back to build

// Serve static files from the React frontend app
//app.use(express.static(path.join(__dirname, 'my-app/build')))
// Anything that doesn't match the above, send back index.html
//app.get('*', (req, res) => {
  //res.sendFile(path.join(__dirname + '/my-app/build/index.html'))
//})
 // Exprees will serve up production assets
  
  //  app.use(express.static(__dirname + '/client/build'));
  
 // app.use(express.static(__dirname + '/client/build'));
    // Express serve up index.html file if it doesn't recognize route
    /*
    app.get('/', (req, res) => {
      res.sendFile(__dirname + "/client/public/index.html");
    });
 */

app.post('/submit', (req, res)=>{

  //MongoDB.connect(URI, ()=>{
    
    if(!req.body.phone){
      var formData = {
        Name: req.body.name,
        Email: req.body.email,
        Phone: 'N/A',
        Message: req.body.message
      }
      res.json(formData);
      console.log(formData);
    } else{
      var formData = {
        Name: req.body.name,
        Email: req.body.email,
        Phone: req.body.phone,
        Message: req.body.message
      }
      console.log(formData);
      res.json(formData);
    }
    
    
    if(err) throw err;


  //})

});

app.listen(port, () => console.log('Server is listening...'));