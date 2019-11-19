const express = require('express') ;
const mongoose = require('mongoose') ;

const router = express.Router() ;


const User = require('../models/UserModel') ;


router.get('/',(req,res) => {
    User.find()
    .then(users => res.json(users))
})

router.post('/add' ,(req,res) => {
    const newUser = new User({
        name : req.body.name ,
        surname : req.body.surname ,
        birthYear : req.body.birthyear ,
        birthPlace : req.body.birthplace
    })
    newUser.save()
    .then(res.json(newUser))
})

router.delete('/:id',(req,res) => {
    User.findById(req.params.id)
    .then(item => item.remove().then(res.json(User)))
})

module.exports = router ;