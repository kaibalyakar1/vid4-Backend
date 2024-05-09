const express = require("express");

const router = express.Router();

const Menu = require("../models/menu");

router.post("/", async (req, res) => {
  try {
    const data = req?.body;
    const menu = new Menu(data);

    const respo = await menu.save();
    res.send(respo);
  } catch (err) {
    res.send(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Menu.find();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

router.get("/:taste", async (req, res) => {
  try {
    const tasteData = req.params.taste;

    const data = await Menu.find({ taste: tasteData });

    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const menuId = req?.params?.id;
    const updateData = req?.body;

    const respo = await Menu.findByIdAndUpdate(menuId, updateData, {
      new: true,
      runValidators: true,
    });

    if (!respo) {
      return res.status(404).json({ error: "Menu not found" });
    }
    res.send(respo);
  } catch (err) {
    res.send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const menuId = req?.params?.id;
    const respo = await Menu.findByIdAndDelete(menuId);
    if (!respo) {
      return res.status(404).json({ error: "Menu not found" });
    }
    res.send(respo);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
