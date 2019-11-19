const mongoose = require("mongoose") ;

const Schema = mongoose.Schema ;

const UserSchema = new Schema({
    name : String ,
    surname :  String ,
    birthYear : String ,
    birthPlace : String
})

module.exports = UsersSchema = mongoose.model('user' , UserSchema) ;