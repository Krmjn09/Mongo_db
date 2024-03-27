const express = require("express");
const { books } = require("../data/books.json");
const { users } = require("../data/users.json");

const { getAllBooks } = require("../controllers/book-controller.js");

const router = express.Router();

const {UserModel,BookModel} = require("../models/index.js");

// const { Router } = require("express");
const { getAllBooks } = require("../controllers/book-controller.js");



router.get("/",getAllBooks);