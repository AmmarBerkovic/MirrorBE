const mongoose = require("mongoose");

const AssignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
    default: "No title",
  },
  topic: {
    type: String,
    trim: true,
    required: true,
    default: "No topic",
  },
  description: {
    type: String,
    trim: true,
    required: false,
    default: "No description"
  },
});

const Assignment = mongoose.model("assignments", AssignmentSchema);
module.exports = Assignment;
