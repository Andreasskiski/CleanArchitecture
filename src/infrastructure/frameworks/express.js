const express = require("express");
const cors = require("cors");

const userRoutes = require("../../interfaces/routes/userRoutes");
const bookingRoutes = require("../../interfaces/routes/bookingRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/booking", bookingRoutes);

module.exports = app;

