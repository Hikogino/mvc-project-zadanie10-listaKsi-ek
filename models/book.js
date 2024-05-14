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
   },
   read: { 
      type: Boolean,
      default: false 
  }
})

module.exports = model('book', BookSchema)
