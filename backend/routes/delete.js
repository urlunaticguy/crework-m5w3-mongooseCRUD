const express = require("express");
const router = express.Router();
const NewDev = require("../models/post");

router.delete("/byID/:id", async (req, res) => {
  try {
    const deletedEntry = await NewDev.deleteOne({ _id: req.params.id });
    res.json(deletedEntry);
    console.log("backedn delete triggered");
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/byName/:name", async (req, res) => {
  try {
    const deletedEntry = await NewDev.deleteOne({ name: req.params.name });
    res.json(deletedEntry);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
