const Assignment = require("../database/models/Assignment");

const getAssignments = (req, res) => {
  Assignment.find({})
    .then((assignments) => res.send(assignments))
    .catch((err) => res.send(err.message));
};

const postAssignment = (req, res) => {
  new Assignment(req.body)
    .save()
    .then((assignment) => res.send(assignment))
    .catch((err) => console.error(err.message));
};

const deleteAssignment = (req, res) => {
  Assignment.deleteOne({ title: req.params.title })
    .then((persons) => res.send(persons))
    .catch((err) => res.send(err));
};

const patchAssignment = (req, res) => {
  const oldPropertyValue = req.params.oldValue;
  const newPropertyValue = req.body.newValue;

  const updateQuery = {};
  updateQuery[req.params.property] = newPropertyValue;
  Assignment.updateOne(
    { [req.params.property]: oldPropertyValue },
    { $set: updateQuery }
  )
    .then((assignment) => res.send(assignment))
    .catch((err) => res.send(err));
};

module.exports = {
  getAssignments,
  postAssignment,
  deleteAssignment,
  patchAssignment,
};
