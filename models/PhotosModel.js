const mongoose = require("mongoose") ;

const Schema = mongoose.Schema ;

const PhotoSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    PhotosArr : [{
        title : String ,
        src : String
    }]
})

module.exports = PhotosSchema = mongoose.model('photo' , PhotoSchema) ;