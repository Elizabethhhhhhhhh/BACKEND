import * as BookModel from "../models/BookModel.js";

export const fetchBooks = async (req, res) =>{
    try{
        const books = await BookModel.getBook();
        res.status(200).json(books);
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })

    }
}
