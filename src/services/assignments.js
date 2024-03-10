const Assignment = require("../database/models/Assignment");

/**
 * TODO: replace with pagination involved
 */
const getAssignments = (req, res) => {
  Assignment.find({})
    .then((assignments) => res.send(assignments))
    .catch((err) => res.send(err.message));
};

// const getAssignments = async (req, res) => {
//   const { page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'asc' } = req.query;
//   const skip = (page - 1) * limit;
//   const sortOptions = { [sortBy]: sortOrder === 'asc' ? 1 : -1 };

//   try {
//     const [assignments, totalCount] = await Promise.all([
//       Assignment.find({}).sort(sortOptions).skip(skip).limit(parseInt(limit)),
//       Assignment.countDocuments({})
//     ]);

//     res.send({
//       assignments,
//       total: totalCount,
//       totalPages: Math.ceil(totalCount / limit),
//       currentPage: page
//     });
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// };

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
