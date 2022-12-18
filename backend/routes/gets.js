const express = require("express");
const router = express.Router();
const NewDev = require("../models/post");

//http://localhost:3000/get/

router.get("/getAll", async (req, res) => {
  try {
    const savedPost = await NewDev.find({});
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
