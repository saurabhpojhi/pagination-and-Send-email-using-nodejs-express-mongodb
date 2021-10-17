const User = require('../model/user.model');
// const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();


const transporter = require('../config/mailconfig');
const message = require('../message/mailmsz')

router.get("",  async function(req, res ){
    const page = +req.query.page || 1;
    const size = +req.query.size || 10;
    const offset = (page-1) * size; // page=3&size=10 == 1 *5 = 5
    const data = await User.find().skip(offset).limit(size).lean().exec();
    
      
      transporter.sendMail(message)

    return res.send(data);

});
module.exports = router;