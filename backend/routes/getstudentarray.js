const express = require('express');
const router = express.Router();
const array = require('../database.js/studentData.js')

router.get("/", (req, res) => {
    try {
        res.status(200).send(array);
    } catch (err) {
        res.status(400).send("internal server error");
    }
})
module.exports = router;