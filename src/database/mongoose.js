const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const { DB_HOST, DB_NAME, DB_PORT } = process.env;

mongoose
  .connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`)
  .then(() =>
    console.log(
      "\x1b[32m%s\x1b[0m",
      "\n===================\nDatabase connected!\n===================\n"
    )
  )
  .catch((error) => console.error(error.message));
