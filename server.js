//Importerar express
const express = require("express");

//Importerar cors
const cors = require("cors");

// Laddar miljövariabler från .env-filen
require("dotenv").config()

//Importerar mongoose
const mongoose = require("mongoose");

// Importerar routes för arbetserfarenheter
const workExperienceRoutes = require("./routes/workexperience");

const app = express();

// Middleware som tillåter cross origin requests
app.use(cors());

// Middleware som gör att servern kan läsa JSON i requests
app.use(express.json());

// Ansluter till MongoDB via connection string från .env
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Ansluten till MongoDB"))
  .catch(err => console.error("Kunde inte ansluta till MongoDB:", err));

// Root route för att kontrollera att servern funkar
app.get("/", (req, res) => {
  res.send("API is running");
});

// Kopplar alla routes till /api/workexperience
app.use("/api/workexperience", workExperienceRoutes);

// Startar servern på porten från .env
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servern körs på port ${PORT}`);
});