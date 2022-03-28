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
   var fullname =  req.body.fullname ;
   var mentor =  req.body.mentor ;
   var grade = req.body.grade;

   var obj = {
       name:fullname,
       mentor: mentor,
       grade: grade
   }
   
    try {
        db.collection("games").add(obj)
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