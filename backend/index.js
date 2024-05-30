import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoutes from "./routes/booksRoutes.js";
import cors from 'cors'


const app = express();

//MIDDLEWARE for parsing request body
app.use(express.json())


//Middleware for handaling CORS POLICY
//OPtion 1: Allow all origins with default of cors
// app.use(cors())

//Option 2: Allow Custom Origins
app.use(
  cors({
    origin: 'https://book-store-mern-frontend-1.vercel.app',
    methods: ['GET', 'POST','PUT','DELETE'],
    allowedHeaders: ['Content-Type'],
  })
)


app.get("/", (request, response) => {
  console.log(request);
  response.json("Hello");
  return response.status(234).send("Welcome to MERN Stack Tutorial.....");
});

app.use('/books', booksRoutes)





mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log(`MongoDB Database is connected`);
    app.listen(PORT, () => {
      console.log(`Server is running on port : ${PORT}`);
    });
  })
  .catch((error)=>{
    console.log(error);
  })

/*

pujalahane872

TdwUqb7hMpa0Fnrg

mongodb+srv://pujalahane872:TdwUqb7hMpa0Fnrg@book-store-app.hkgw1zl.mongodb.net/?retryWrites=true&w=majority&appName=book-store-app


// ROUTE for save a new book
app.post('/books', async (request, response)=>{
  try {
    if(
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ){
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear'
      })
    }

    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    }
    const book = await Book.create(newBook)
    return response.status(201).send(book)
    
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message})
  }
})

//ROUTE for get all the books from database
app.get('/books', async (request, response)=>{
  try {
    
    const books = await Book.find({})
    return response.status(201).json({
      count: books.length,
      data: books
    })
    
  } catch (error) {
    console.log(error.message);
    response.status(500).send({message: error.message})
  }
})

//ROUTE for Get One Book from database
app.get('/books/:id', async (request, response)=>{
  try {


    
    const {id}= request.params;
    const book = await Book.findById(id)
    return response.status(200).json(book)
    
  } catch (error) {
    console.log(error.message);
    response.status(500).json({error: error.message})
  }
})


//ROUTE for update a book
app.put('/books/:id', async (request, response)=>{
  try {
    if(
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ){
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear'
      })
    }



    const {id} = request.params;
    const result = await Book.findByIdAndUpdate(id, request.body);
    if(!result){
      return response.status(404).json({message: 'Book not found..'})
    }
    response.status(200).send({message: 'Book Updated successfully...'})
    
  } catch (error) {
    console.log(error.message);
    response.status(500).json({error: error.message})
  }
})

//ROUTE for delete a book
app.delete('/books/:id', async (request, response)=>{
  try {
    const {id} = request.params;
    const result = await Book.findByIdAndDelete(id)
    if(!result){
      return response.status(404).json({ message: 'Book not found..'})
    }
    response.status(200).send("Successfully Deleted Book..")
    
  } catch (error) {
    console.log(error.message);
    response.status(500).json({error: error.message})
  }
})

*/
