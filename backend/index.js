const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRoutes = require("./routes/userRoutes.js");
app.use("/users", userRoutes);

const userController = require("./controllers/userController.js");

app.get("/loggedArea", userController.verifyAuth, (req, res) => {
  res.json({
    msg: `You are logged in with ID ${req.userId}`,
  });
});

app.get(
  "/adminArea",
  userController.verifyAuth,
  userController.verifyIsAdmin,
  (req, res) => {
    res.json({ msg: "Welcome, admin!" });
  }
);

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.listen(8181, (err) => {
  console.log(`http://localhost:8181`);
});