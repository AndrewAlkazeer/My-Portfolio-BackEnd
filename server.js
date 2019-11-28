const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const cors = require('cors');
const env = require('dotenv/config');
const Mongoose = require('mongoose');
const OS = require('os');
const useragent = require('express-useragent');
var userSchema = Mongoose.Schema;

templateInfo = new userSchema({
  computerName: String,
  IP: String,
  OS: String,
  Browser: String,
  Platform: String
});
modelClassInfo = Mongoose.model('computerInfo', templateInfo);

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
app.use(useragent.express());

// changed path to public but it should be back to build

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'my-app/build')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/my-app/build/index.html'))
})
 // Exprees will serve up production assets
  
  //  app.use(express.static(__dirname + '/client/build'));
  
 // app.use(express.static(__dirname + '/client/build'));
    // Express serve up index.html file if it doesn't recognize route
    /*
    app.get('/', (req, res) => {
      res.sendFile(__dirname + "/client/public/index.html");
    });
 */

app.post('/', (req, res)=>{
  //var computerName = OS.hostname();
  //var info = req.useragent.browser;
console.log('i am in main url');
Mongoose.connect(process.env.URI, { useNewUrlParser: true }, (err)=>{

  if(err) throw err;

  modelClassInfo.find({IP: req.ip}, (err, db)=>{
    if(err) {console.log('Error Reading Info to the database')};
    if(!db.length){
      var data = new modelClassInfo({
        computerName: OS.hostname(),
        IP: req.ip,
        OS: req.useragent.os,
        Browser: req.useragent.browser,
        Platform: req.useragent.platform
      });
      data.save((err)=>{
       if(err) {console.log('Error Saving Info to the database')};
      })
    };
  });
  //Mongoose.connection.close();
});
})


app.post('/loves', (req, res)=>{

  Mongoose.connect(process.env.URI, { useNewUrlParser: true }, (err)=>{
    if(err) throw err;

// Error Here needs to be fixed doesnt add another love if its saved under the same IP YOO!HOO! :D

modelClassLove.find({IP: req.ip}, (err, result)=>{
if(err) {console.log('Error finding hearts in the database')};
if(!result.length){
  var dataLove = new modelClassLove({
    IP: req.ip,
    Love: 1
  })
  dataLove.save((err)=>{
    if(err) throw err;
  });
  //Mongoose.connection.close();
 
} //else{
  // console.log('You already Spread the Love :)');
//  Mongoose.connection.close();
//}
});
//Mongoose.connection.close();
});
   return res.redirect('/');
   
});

app.get('/hearts', (req, res)=>{
  Mongoose.connect(process.env.URI, {useNewUrlParser: true}, (err)=>{
    if(err) throw err;
    modelClassLove.find({Love: 1}, (err, love)=>{
      if(err) throw err;
     return res.json(love);
    });
  })
})

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
        if(err) console.log('Error Saving the Message to the database');
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
        if(err) console.log('Error Saving the Message to the database');
      });
      
     res.send('YOUR MESSAGE HAS BEEN SUBMITTED SUCCESSFULLY. I WILL GET BACK TO YOU ASAP!');
    }
   Mongoose.connection.close();
  })

});

app.listen(port, () => console.log('Server is listening...'));