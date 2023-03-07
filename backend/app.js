const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const apiRouter = require("./routes/api");

app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/api", apiRouter);

app.listen(port, () =>
  console.log(`Rental Property Manager app listening on port ${port}!`)
);
