
const mongoose = require('mongoose');



const UserName = new mongoose.Schema({
    UserName: { type: String, required: true },
    mail: { type: String, required: true },
    Age: { type: Number, required: false }

});


const User = mongoose.model('user', UserName);
module.exports = User;


