const {Schema, model} = require('mongoose')


const BookSchema = new Schema ({
   title: {
    type: String,
    required: true
   },
   author: { 
    type: String, 
    required: true 
   },
   genre: { 
    type: String, 
    required: true 
   },
   year: { 
    type: Number, 
    required: true 
   },
   notes: { 
    type: String, 
    default: '' 
   }
})

module.exports = model('book', BookSchema)