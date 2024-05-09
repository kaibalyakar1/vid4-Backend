const mongoose = require("mongoose");

const personSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
    },
    work: {
      type: String,
      enum: ["Chef", "Waiter", "Manager"],
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Email already exists"],
    },
    address: {
      type: String,
    },
    salary: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
