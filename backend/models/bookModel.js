
import mongoose  from "mongoose";

const bookSchema = mongoose.Schema({
  title:{
    type: String,
    required:true,
  },
  author:{
    type: String,
    required:true,
  },
  publishYear:{
    type: String,
    required:true,
  },

},
  {
    timestamp:true
  }
)

export const Book = mongoose.model('Book', bookSchema)