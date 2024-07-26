import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
    try {
        const book_read = await Book.find()
        res.status(200).json(book_read)
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json(error)
    }
}