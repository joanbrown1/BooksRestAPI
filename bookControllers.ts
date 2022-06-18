import { Request, Response } from "express";
const {BookModel} = require("./book")


class BookProcesses {
    constructor(){}
    // 
     async getBooks(req: Request,res: Response){
        // 
        const result = await BookModel.find()
        res.json(result)
        // 
     }
    //  
    async getBook(req: Request,res: Response){
        // 
        const result = await BookModel.findById(req.query.id)
        res.json(result)
        // 
    }
    // 
    async editBook(req: Request,res: Response){
        // 
        const result = await BookModel.updateOne({id:req.body.id},req.body)
        res.json(result)
        // 
    }
    // 
    async createBook(req: Request,res: Response){
        //
        // console.log(req.body)
        const result = await BookModel.create(req.body)
        res.json(result)
        //  
    }
    // 
    async deleteBook(req: Request,res: Response){
        // 
        const result =  await BookModel.deleteOne({id:req.query.id})
        res.json(result)
        // 
    }
    // 
}
const BookProcess = new BookProcesses

module.exports = {BookProcess}