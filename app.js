const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/index");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", routes);

app.listen(4000, () => {
  console.log("Server started at port 4000");
});
