const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const mongoose = require("mongoose");

mongoose.set("strictQuery", false); //depreciation warning - prepare for new version

const port = 3000;

mongoose.connect(
  "mongodb://127.0.0.1:27017/football",
  { useNewUrlParser: true },
  () => {
    console.log("Connected to MONGO DB");
  }
);

//importing routes
const getRoutes = require("./routes/gets");
app.use("/get", getRoutes);
const postsRoutes = require("./routes/posts");
app.use("/posts", postsRoutes);
const patchRoutes = require("./routes/patchs");
app.use("/patch", patchRoutes);
const deleteRoutes = require("./routes/delete");
app.use("/delete", deleteRoutes);

app.listen(port, () => {
  console.log("Server is listening on PORT ", port);
});

app.get("/", (request, response) => {
  response.send("WE ARE ON HOME");
});

// endpoint for creating a new user (post)

// endpoint for displaying all users information (get)

// endpoint for updating users info

// endpoint for deleting users info

// company employees details
