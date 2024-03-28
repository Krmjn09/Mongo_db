const {UserModel,BookModel} = require("../models/index.js");
const issuedBooks = require("../dtos/book-dto.js");
// const getAllBooks = require("../controllers/book-controller.js").default;

const getAllBooks = async (req, res) => {
  const books = await BookModel.find();

  if (books.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No Book Found",
    });
  }
  console.log(data);
 return  res.status(200).json({
    success: true,
    data: books,
  });
};

const getSingleBookById = async (req, res) => {
    const { id } = req.params;
    const book = await BookModel.findById(id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "No Book Found",
      });
    }
    return res.status(200).json({
      success: true,
      data: book,
      message: "Book found successfully",
    });
};


const getAllIssuedBooks = async (req, res) => {   
    const users = await UserModel.find({
        issuedBooks: { $exists: true, $ne: [] },
      }).populate("issuedBooks");
      
      const issuedBooks = users.map((each) => new IssuedBook(each));

    
    if(issuedBooks.length === 0){
        return res.status(404).json({
            success: false,
            message: "No Book Found",
          });

    }
    return res.status(200).json({
        success: true,
        data: issuedBooks,
        message: "Books found successfully",
      });
    };

const addNewBook = async (req, res) => {
    const {data} = req.body;
    if(!data){
        return res.status(400).json({
            success: false,
            message: "Please provide required data",
          });
        }
        await BookModel.create(data);
        const allBooks = await BookModel.find();
        return res.status(200).json({
            success: true,
            data: allBooks,
            message: "Book added successfully",
          });

    };

    const updateBookById = async (req, res) => {}
    module.exports = {getAllBooks,getSingleBookById,getAllIssuedBooks,addNewBook,updateBookById};