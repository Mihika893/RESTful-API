const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    
    name : {
        type: String,
        required : true
    },
    price : {
        type: Number,
        required : [true, "NA"],
        
    },
    featured : {
        type: Boolean,
        default : true
    },
    rating : {
        type: Number,
        default : 4.9
    },
    createdAt : {
        type: Date,
        default : Date.now()
    },
    company : {
        type: String,
        enum : {
            values :["apple", "dell", "min", "asus", "lenovo","samsung"]
        }
    }
})

module.exports = mongoose.model("product", productSchema)