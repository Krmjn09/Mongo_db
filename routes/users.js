const express = require("express");
const { getAllUsers,
getSingleUserById,
deleteUser,
updateUserData,
createNewUser,
getSubscriptionDetailsById} = require("../controllers/user-controller.js");
const { users } = require("../data/users.json");
const { UserModel, BookModel } = require("../models/index");
const { get } = require("mongoose");
const router = express.Router();

router.get("/",getAllUsers);
router.get("/:id",getSingleUserById);
router.delete("/:id",deleteUser);
router.post("/:id",updateUserData);
router.post("/",createNewUser);
router.get("/subscription-details/:id", getSubscriptionDetailsById);
module.exports = router;