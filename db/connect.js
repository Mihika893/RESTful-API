const mongoose  = require("mongoose");

const connectdb = (uri) =>{
    return mongoose.connect(uri)
}

module.exports = connectdb;