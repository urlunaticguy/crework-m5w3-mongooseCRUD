const express = require("express");
const router = express.Router();
const NewDev = require("../models/post");

//http://localhost:3000/posts/

router.get("/", (request, response) => {
  response.send("We are on POSTS. Use a POST request to create something.");
});

router.post("/", async (req, res) => {
  const post = new NewDev({
    name: req.body.name,
    role: req.body.role,
    tasksAssignedCount: 0,
    tasksCompletedCount: 0,
    tasksRemainingCount: 0,
    tasksAssigned: [],
    tasksCompleted: [],
    tasksRemaining: [],
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
