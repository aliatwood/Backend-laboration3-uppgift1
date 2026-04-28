const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const workExperienceRoutes = require("./workexperience");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.use("/api/workexperience", workExperienceRoutes);

app.listen(3000);