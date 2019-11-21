const express = require('express') ;
const router = express.Router() ;
const mongoose = require('mongoose') ;

const  Photo = require('../models/PhotosModel')
const User = require('../models/UserModel') ;

router.get('/' ,(req,res) => {
    Photo.findOne({user : req.user.id})
    .then(photo => {
        if(!photo) {
            res.status(404).json({photo : 'there is no photos for this user'})
        } else {
            res.json(photo) ;
        }
    })
})

router.post('/addphoto' ,(req,res) => {
    Photo.findOne({user : req.user.id})
    .then(pic => {
        const newPhoto = {
            title : req.body.title ,
            src : req.body.src
        }
        pic.PhotosArr.unshift(newPhoto) ;
        pic.save().then(pic => res.json(pic)) ;
    })
})

router.delete('/:title',(req,res) => {
    Photo.findOne({user : req.user.id})
    .then(photo => {
        const removeIndex = photo.photosArr
          .map(item => item.title)
          .indexOf(req.params.title);
        photo.experience.splice(removeIndex, 1);
        photo.save().then(photo => res.json(photo));
      })
      .catch(err => res.status(404).json(err));
})

module.exports = router ;