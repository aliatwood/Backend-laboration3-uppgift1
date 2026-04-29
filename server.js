const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Laddar in miljövariabler från .env-filen
const mongoose = require("mongoose");

// Importerar routes för arbetserfarenheter
const workExperienceRoutes = require("./workexperience");

const app = express();

// Tillåter anrop från andra domäner (cross-origin requests)
app.use(cors());

// Gör så att Express kan läsa JSON i request body
app.use(express.json());

// Ansluter till MongoDB via connection string från .env
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Ansluten till MongoDB"))
  .catch(err => console.error("Kunde inte ansluta till MongoDB:", err));

// Alla routes för arbetserfarenheter ligger under /api/workexperience
app.use("/api/workexperience", workExperienceRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

// Startar servern på porten från .env
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servern körs på port ${PORT}`);
});