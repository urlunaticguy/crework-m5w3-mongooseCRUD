const mongoose = require("mongoose");

const NewSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  tasksAssignedCount: Number,
  tasksCompletedCount: Number,
  tasksRemainingCount: Number,

  tasksAssigned: [String],
  tasksCompleted: [String],
  tasksRemaining: [String],
});

module.exports = mongoose.model("NewDev", NewSchema);
