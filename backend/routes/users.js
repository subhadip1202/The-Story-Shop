var express = require('express');
var router = express.Router();
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var environment = require('../environment');

router.post('/register', function (req, res, next) {
  var user = new User({
    email: req.body.email,
    username: req.body.username,
    password: User.hashPassword(req.body.password),
    creation_dt: Date.now(),
    activated: false
  });

  let promise = user.save();

  promise.then(function (doc) {

    // create token to send
    let activation_token = jwt.sign({ email: doc.email }, 'secret', { expiresIn: '1h' });
    let address = `http://localhost:4200/main/activate?key=${activation_token}`;
    //send email over here
    const mailjet = require('node-mailjet')
      .connect(environment.MJ_APIKEY_PUBLIC, environment.MJ_APIKEY_PRIVATE)
    const request = mailjet
      .post("send", { 'version': 'v3.1' })
      .request({
        "Messages": [
          {
            "From": {
              "Email": environment.MJ_SENDER_MAIL,
              "Name": environment.MJ_SENDER_NAME
            },
            "To": [
              {
                "Email": req.body.email,
                "Name": req.body.username
              }
            ],
            "Subject": "Activate your account",
            "TextPart": "Dear user, welcome to the story shop! Your one stop solution for all your book search",
            "HTMLPart": `<h3>Welcome ${doc.username}!</h3><br />Click link below to activate your account! <br /> <a href="${address}">${address}</a>`
          }
        ]
      });

      request.then((result) => {
        console.log(result.body);
        return res.status(201).json(doc);
      })
      .catch((err) => {
        console.log(err.statusCode);
        return res.status(501).json({ message: 'Error registering user.' })
      })

    
  })

  promise.catch(function (err) {
    return res.status(501).json({ message: 'Error registering user.' })
  })
})

router.post('/login', function (req, res, next) {
  let promise = User.findOne({ email: req.body.email }).exec();

  promise.then(function (doc) {
    if (doc) {

      // added for email verification if not activated return error 501
      if (!doc.activated) {
        return res.status(500).json({ message: 'User not activated' });
      }
      if (doc.isValid(req.body.password)) {
        // generate token
        let token = jwt.sign({ username: doc.username }, 'secret', { expiresIn: '3h' });

        return res.status(200).json(token);

      } else {
        return res.status(501).json({ message: ' Invalid Credentials' });
      }
    }
    else {
      return res.status(501).json({ message: 'User email is not registered.' })
    }
  });

  promise.catch(function (err) {
    return res.status(501).json({ message: 'Some internal error' });
  })
})

router.get('/username', verifyToken, function (req, res, next) {
  return res.status(200).json(decodedToken.username);
})

router.get('/useremail', verifyToken, function (req, res, next) {
  return res.status(200).json(decodedToken.email);
})


router.get('/activate', verifyToken, function(req,res,next){

    // You can put additional check if user is activated or not
    // but that is left as an exercise.
    let promise = User.findOneAndUpdate({email: decodedToken.email}, {activated:true}).exec()

    promise.then(function(doc){
      return res.status(200).json({message:'Activated'});
    })

    promise.catch(function(err){
      return res.status(500).json({message:'Error in activating account'});
    })
})

var decodedToken = '';
function verifyToken(req, res, next) {
  let token = req.query.token;

  jwt.verify(token, 'secret', function (err, tokendata) {
    if (err) {
      return res.status(400).json({ message: ' Unauthorized request' });
    }
    if (tokendata) {
      decodedToken = tokendata;
      next();
    }
  })
}

module.exports = router;
