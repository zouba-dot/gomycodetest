const express = require('express') ;
const mongoose = require('mongoose') ;

const usersRouter = require('./routers/users') ;
const photoRouter = require('./routers/photos') ;

const bodyParser = require('body-parser') ;
const app = express() ;


app.use(bodyParser.urlencoded({extended : false})) 
app.use(bodyParser.json())

app.use('/users',usersRouter) ;
app.use('/photos',photoRouter) ;





const URI = 'mongodb+srv://admin:12345@cluster0-twrtz.mongodb.net/test'
mongoose.connect(URI ,{useNewUrlParser: true , useUnifiedTopology: true })
.then(console.log('mongoDB is connected'))
.catch(err => console.log(err))


const port = 5000 ;
app.listen(port , () => console.log(`server running on port ${port}`))