const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const cors = require('cors');
const env = require('dotenv/config');
const Mongoose = require('mongoose');

var userSchema = Mongoose.Schema;

var templateLove = new userSchema({
  IP: String,
  Love: Number
})
const modelClassLove = Mongoose.model('LoveUser', templateLove);

var template = new userSchema({
  Name: String,
  Email: String,
  Phone: String,
  Message: String
})
const modelClass = Mongoose.model('ContactUser', template);

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

app.post('/loves', (req, res)=>{

  Mongoose.connect(process.env.URI, { useNewUrlParser: true }, (err)=>{
    if(err) throw err;

// Error Here needs to be fixed doesnt add another love if its saved under the same IP YOO!HOO! :D

modelClassLove.find({IP: req.ip, Love: 1}, (err, result)=>{
if(err) {console.log('Error finding in the database')};
if(!result.length){
console.log(result.length);
console.log(req.ip);
  var data = new modelClassLove({
    IP: req.ip,
    Love: 1
  })
  data.save((err)=>{
    if(err) throw err;
  });
 // Mongoose.connection.close();
 
} //else{
  // console.log('You already Spread the Love :)');
//  Mongoose.connection.close();
//}
});

  

});
// return res.redirect('/');
});

app.post('/submit', (req, res)=>{

  Mongoose.connect(process.env.URI, { useNewUrlParser: true }, (err)=>{
    if(err) throw err;

    if(!req.body.phone){
      var data = new modelClass({
        Name: req.body.name,
        Email: req.body.email,
        Phone: 'N/A',
        Message: req.body.message
      })

      data.save((err)=>{
        if(err) console.log('Error Saving to the database');
      });

    return res.send('YOUR MESSAGE HAS BEEN SUBMITTED SUCCESSFULLY, I WILL GET BACK TO YOU ASAP!');

    } else{
      var data = new modelClass({
        Name: req.body.name,
        Email: req.body.email,
        Phone: req.body.phone,
        Message: req.body.message
      })

      data.save((err)=>{
        if(err) console.log('Error Saving to the database');
      });
      
     res.send('YOUR MESSAGE HAS BEEN SUBMITTED SUCCESSFULLY, I WILL GET BACK TO YOU ASAP!');
    }
   Mongoose.connection.close();
  })

});

app.listen(port, () => console.log('Server is listening...'));