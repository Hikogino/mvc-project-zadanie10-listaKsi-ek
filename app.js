const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const bookR = require('./routes/bookRouter')
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 4002;
const DB_USER =process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME


async function start() {
    try {
      await mongoose.connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ajobvj9.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
        
      )
      app.listen(PORT, () => {
        console.log(`Server started on ${PORT}`);
      })
      console.log("Connected to MongoDB successfully!");
    } catch (e) {
        console.log(e)
    }
}

start()


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.json())

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.use(bookR);



app.use(function (req,res,next){
    res.status(404).send("Not Found");
});






