const express = require('express');
const router = express.Router();
const firebase = require('firebase');
const config = require('../../config');
if (!firebase.apps.length) {
    firebase.initializeApp(config.firebaseconfig);
 }else {
    firebase.app(); 
 }
 firestore = firebase.firestore();




router.post("/",async (req,res) => {
   var name =  req.body.name ;
   var Mentorsname =  req.body.Mentorsname ;
   var standard = req.body.standard;
   var schoolname = req.body.schoolname;
   var jsonfiles = req.body.jsonfiles;

   var obj = {
    name :  name,
    Mentorsname : Mentorsname,
    standard : standard,
    schoolname : schoolname,
    jsonfiles : jsonfiles,

   }
   
    
   
    try {
        db.collection("students").add(obj)
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});

        
    } catch(err) {
        res.status(400).send("internal server error");
        console.log(err);
    }


});
module.exports = router;