const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    taste: {
      type: String,
      enum: ["Sweet", "Salty", "Sour", "Spicy", "Hot", "Cold"],
      required: true,
    },
    is_drink: {
      type: Boolean,
      required: true,
    },
    ingredients: {
      type: String,
      enum: ["Chicken Wings", "Spices", "Sauce"],
      required: true,
    },
    num_sales: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
