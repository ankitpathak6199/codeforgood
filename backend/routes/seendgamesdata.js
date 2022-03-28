const objects = require('../database.js/students');


const express = require('express');
const { Router } = require('express');
const router = express.Router();
const arrx = ["Hygiene Run", "Stairs and Slides"]

function student() {

    var obj = objects;

    var datax = ["correct",
        "wrong",
        "fullRestarts",
        "allCorrectAttempt"]
    var datay = [obj.attempts.correct, obj.attempts.wrong, obj.attempts.fullRestarts, obj.attempts.allCorrectAttempt]
    console.log(obj);
    var obje = {
        x: datax,
        y: datay,
    }
    console.log(obje);
    return obje;

}
// function wincount(){
//     var obj = objects;
//     var data = [];
//     console.log(obj);
//     data.push(obj.obj3.jsonfiles.HR.win_count);
//     data.push(obj.obj3.jsonfiles.RP.win_count);
//     console.log(data);
//     return data;

// }
// function losecount(){
//     var obj = objects;
//     var data = [];
//     console.log(obj);
//     data.push(obj.obj3.jsonfiles.HR.lose_count);
//     data.push(obj.obj3.jsonfiles.RP.lose_count);
//     console.log(data);
//     return data;
// }

//     function totalscore(){
//     var obj = objects;
//     var data = [];
//     console.log(obj);
//     data.push(obj.obj3.jsonfiles.HR.total_score);
//     data.push(obj.obj3.jsonfiles.RP.total_score);
//     console.log(data);
//     return data;


// }
// win_count : 6,
//         lose_count : 7,
//         score : [4,5,11,13,14],
//         total_score
// win_count : 6,
//         lose_count : 7,
//         score : [4,5,11,13,14],
//         total_score
router.post("/", (req, res) => {
    // var count = countrp();
    // var wincoun = wincount();
    // var losecoun = losecount();
    // var totascor = totalscore();
    var objec = student();
    res.send(objec);





})
module.exports = router;