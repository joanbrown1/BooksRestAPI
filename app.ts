const express = require("express");
const {BookProcess} = require('./bookControllers')

const app = express();
// 
const PORT = process.env.PORT || 5000
app.use(express.json())
// 

app.get("/book",BookProcess.getBook)
// 
app.get("/books",BookProcess.getBooks)
// 
app.post("/book", BookProcess.createBook)
// 
app.patch("/book", BookProcess.editBook)
// 
app.delete("/book", BookProcess.deleteBook)


app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})