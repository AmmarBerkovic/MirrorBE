const express = require("express");
const router = express.Router();
const {
  getAssignments,
  postAssignment,
  deleteAssignment,
  patchAssignment,
} = require("../services/assignments");

router.route("/").get(getAssignments).post(postAssignment);
router.delete("/:title", deleteAssignment);
router.patch("/:property/:oldValue", patchAssignment);

module.exports = router;
