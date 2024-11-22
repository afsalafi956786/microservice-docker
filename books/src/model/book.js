const { Schema, mongo } = require("mongoose");

const mongoose = require('mongoose');

const bookSchema = new Schema({
    name:{
        type:String,
        
    },
    type:{
        type:String,
        default:'book'
    }


},{
    timestamps:true
})

const bookModel = mongoose.model('Book',bookSchema);
module.exports = bookModel;