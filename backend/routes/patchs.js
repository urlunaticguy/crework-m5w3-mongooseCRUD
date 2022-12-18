const express = require("express");
const router = express.Router();
const NewDev = require("../models/post");

router.patch("/assignTask", async (req, res) => {
  let tasksAssignedLocal = [];
  let count = 0;
  try {
    const targetEntry = await NewDev.find({ _id: req.body.ID });
    tasksAssignedLocal = targetEntry[0].tasksAssigned;
    if (!tasksAssignedLocal.includes(req.body.Task)) {
      tasksAssignedLocal.push(req.body.Task);
    }
    count = tasksAssignedLocal.length;
  } catch (err) {
    console.log("Error");
  }

  try {
    const updateEntry = await NewDev.updateOne(
      { _id: req.body.ID },
      {
        $set: { tasksAssignedCount: count, tasksAssigned: tasksAssignedLocal },
      }
    );
    res.json(updateEntry);
  } catch (err) {
    res.json({ messsage: err });
  }
});

module.exports = router;
