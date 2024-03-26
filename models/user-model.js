const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    issuedBooks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Book",
      },
    ],
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
