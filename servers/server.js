const express = require('express');
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
const config = require('./config.js');

let middleware= require('./middleware');
let vent=require('../routes/ventilator');
const router=express.Router();
let app = express(); 

app.use(bodyParser.urlencoded({ // Middleware
  extended: true
}));
app.use(bodyParser.json());

app.use('/',router);
router.post('/login', function (req, res){
  let username = req.body.username;

  let password = req.body.password;
    // For the given username fetch user from DB
  let mockedUsername = 'admin';
  let mockedPassword = 'password';

  if (username && password) {
    if (username === mockedUsername && password === mockedPassword) {
      let token = jwt.sign({username: username},
        config.secret,
        { expiresIn: '24h' // expires in 24 hours
        }
      );
        // return the JWT token for the future API calls
      res.json({
        success: true,
        message: 'Authentication successful!',
        token: token
      });
    }
    else{
      res.send(403).json({
        success: false,
        message: 'Incorrect username or password'
      });
    }
  }
  else {
    res.send(400).json({
      success: false,
      message: 'Authentication failed! Please check the request'
    });
  }
});

router.get('/',middleware);

router.get('/',(req,res)=>{
  res.json({
    success: true,
    message: 'Testing successful'
  });
}),
app.listen('1500');
module.exports=router;
