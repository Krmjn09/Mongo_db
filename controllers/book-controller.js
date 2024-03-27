const {UserModel,BookModel} = require("../models/index.js");

const getAllBooks = async(req,res) => {
    const books = await BookModel.find();

    if(books.length === 0){
        return res.status(404).json({
            success: false,
            message: "No books found",
        });

    }
};

const getSingleBookById = () => {};

module.exports = { getAllBooks, getSingleBookById };