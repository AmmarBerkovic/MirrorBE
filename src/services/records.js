const Record = require("../database/models/Record");

/**
 * TODO: replace with pagination involved
 */
const getRecords = (req, res) => {
  Record.find({})
    .then((records) => {
      res.send(records);
    })
    .catch((err) => res.send(err.message));
};

// const getRecords = async (req, res) => {
//   const {
//     page = 1,
//     limit = 10,
//     sortBy = "date",
//     sortOrder = "asc",
//   } = req.query;
//   const skip = (page - 1) * limit;
//   const sortOptions = { [sortBy]: sortOrder === "asc" ? 1 : -1 };

//   try {
//     const [records, totalCount] = await Promise.all([
//       Record.find({}).sort(sortOptions).skip(skip).limit(parseInt(limit)),
//       Record.countDocuments({}),
//     ]);

//     res.send({
//       records,
//       total: totalCount,
//       totalPages: Math.ceil(totalCount / limit),
//       currentPage: page,
//     });
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// };

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
