// const firebase = require('../../db');

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
        let user = await firebase.auth().createUserWithEmailAndPassword(email, password);
        if(user) {
            const { currentUser } = firebase.auth();
            // add displayName 
            // await currentUser.updateProfile({
            //     displayName: `${firstName} ${lastName}`
            // });
            // 
            res.status(200).send(currentUser);
        }
    } catch(err) {
        res.status(400).send("internal server error");
        console.log(err);
    }


});
module.exports = router;
