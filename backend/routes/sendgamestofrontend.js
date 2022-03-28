const objects = require('../database.js/games');

const express = require('express');
const { Router } = require('express');
const router = express.Router();
const arrx = ["Hygiene Run","Stairs and Slides"]

function countrp(){
    var obj = objects;
    var data = [];
    console.log(obj);
    data.push(obj.obj3.jsonfiles.HR.count_RP);
    data.push(obj.obj3.jsonfiles.RP.count_RP);
    console.log(data);
    return data;
    
}
function wincount(){
    var obj = objects;
    var data = [];
    console.log(obj);
    data.push(obj.obj3.jsonfiles.HR.win_count);
    data.push(obj.obj3.jsonfiles.RP.win_count);
    console.log(data);
    return data;
    
}
function losecount(){
    var obj = objects;
    var data = [];
    console.log(obj);
    data.push(obj.obj3.jsonfiles.HR.lose_count);
    data.push(obj.obj3.jsonfiles.RP.lose_count);
    console.log(data);
    return data;
}
    
    function totalscore(){
    var obj = objects;
    var data = [];
    console.log(obj);
    data.push(obj.obj3.jsonfiles.HR.total_score);
    data.push(obj.obj3.jsonfiles.RP.total_score);
    console.log(data);
    return data;
    

}
// win_count : 6,
//         lose_count : 7,
//         score : [4,5,11,13,14],
//         total_score
// win_count : 6,
//         lose_count : 7,
//         score : [4,5,11,13,14],
//         total_score
router.post("/",(req,res) => {
    var count = countrp();
    var wincoun = wincount();
    var losecoun = losecount();
    var totascor = totalscore();
    res.send({
        x : arrx,
        y : {count,wincoun,losecoun,totascor}
    });
    
    



})
module.exports = router;
