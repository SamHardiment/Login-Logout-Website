const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors("*"));
// Start route
app.get("/", (req, res) =>
  res.json({ message: "Welcome to my Login/Logout App" })
);

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

module.exports = app;
