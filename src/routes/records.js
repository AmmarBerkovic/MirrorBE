const express = require("express");
const router = express.Router();
const { getRecords, postRecord } = require("../services/records");

router.route("/")
  .get(getRecords)
  .post(postRecord);

module.exports = router;
