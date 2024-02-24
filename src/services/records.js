const Record = require("../database/models/Record");

const getRecords = (req, res) => {
  Record.find({})
    .then((records) => {
      res.send(records);
    })
    .catch((err) => res.send(err.message));
};

const postRecord = (req, res) => {
  new Record(req.body)
    .save()
    .then((records) => res.send(records))
    .catch((err) => console.error(err.message));
};

module.exports = {
  getRecords,
  postRecord,
};
