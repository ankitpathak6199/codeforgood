const express = require('express');
const router = express.Router();
const firebase = require('firebase');
const config = require('../../config');
if (!firebase.apps.length) {
    firebase.initializeApp(config.firebaseconfig);
 }else {
    firebase.app(); 
 }





router.post("/",async (req,res) => {
    var email = req.body.email;
    var password = req.body.password;
    try {
        firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    res.status(200).send(user);
  })
  .catch((error) => {
      res.status(400).send("internal server")
    var errorCode = error.code;
    var errorMessage = error.message;
  });
    } catch(err) {
        res.status(400).send("internal server error");
        console.log(err);
    }


});
module.exports = router;