const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
require("./database/mongoose.js");

const express = require("express");
const app = express();

//** MIDDLEWARE */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//** ROUTES */
const assignmentsRoute = require("./routes/assignments.js");
const recordsRoute = require("./routes/records.js")

app.use(express.json()); //enabling Postman body to come through
app.use("/assignments", assignmentsRoute);
app.use("/records", recordsRoute);

//** SETTING THE PORT */
const { SERVER_PORT } = process.env;
app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on port ${SERVER_PORT}`);
});
