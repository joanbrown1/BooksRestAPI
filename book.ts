const mongoose = require("mongoose")
const {Schema} = mongoose
mongoose.connect("mongodb://localhost:27017/book");
const db = mongoose.connection
db.on('connected',()=>{console.log("Connected successfully to mongoDB")})
// 
const bookSchema = new Schema({
    // 
    title:String,
    author:String,
    content:String,
    rating:Number,
    review:String,
    // 
}) 
const BookModel = mongoose.model('Book',bookSchema);
// 
module.exports = {BookModel}
