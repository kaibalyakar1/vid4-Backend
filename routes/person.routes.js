const express = require("express");
const router = express.Router();
const Person = require("../models/person");
router.post("/", async (req, res) => {
  try {
    //assuming the request body contains the person data
    const data = req?.body;

    //create a new Person document using mmongoose model
    const person = new Person(data);

    //save the new person to the database
    const respo = await person.save();
    res.send(respo);
  } catch (err) {
    res.send(err);
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    //storing the response in a variable
    const respo = await Person.find();
    //sending the response
    res.send(respo);
  } catch (err) {
    res.send(err);
    console.log(err);
  }
});

//parametrized API
router.get("/:work", async (req, res) => {
  try {
    const respo = req.params.work;
    const data = await Person.find({ work: respo });
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personId = req?.params?.id;
    const updatedData = req?.body;

    const respo = await Person.findByIdAndUpdate(personId, updatedData, {
      new: true, //return the updated document
      runValidators: true, //validate the data by running mongoose validation
    });

    if (!respo) {
      return res.status(404).json({ error: "Person not found" });
    }

    res.send(respo);
  } catch {
    res.send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const personId = req?.params?.id;
    const respo = await Person.findByIdAndDelete(personId);
    if (!respo) {
      return res.status(404).json({ error: "Person not found" });
    }
    res.send(respo);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
