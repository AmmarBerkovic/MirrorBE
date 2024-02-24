const mongoose = require("mongoose");

const RecordSchema = new mongoose.Schema({
  date: {
    type: String,
    trim: true,
    required: true,
  },
  assignments: {
    type: [Object],
    required: false,
    default: [],
  },
});

const Record = mongoose.model("records", RecordSchema);
module.exports = Record;
