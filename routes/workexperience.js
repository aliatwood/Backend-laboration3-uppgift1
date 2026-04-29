const express = require("express");
const router = express.Router();

// Importerar mongoose för arbetserfarenheter
const WorkExperience = require("../models/WorkExperience");

// GET - Hämtar alla arbetserfarenheter
router.get("/", async (req, res) => {
  try {
    const data = await WorkExperience.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Kunde inte hämta data" });
  }
});

// GET - Hämtar en specifik arbetserfarenhet med id
router.get("/:id", async (req, res) => {
  try {
    const item = await WorkExperience.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ error: "Posten hittades inte" });
    }
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: "Ogiltigt ID eller serverfel" });
  }
});

// POST - Skapar en ny arbetserfarenhet
router.post("/", async (req, res) => {
  const { companyName, jobTitle, location, startDate, description } = req.body;

  //Validering för de obligatoriska fälten
  if (!companyName || !jobTitle || !location || !startDate || !description) {
    return res.status(400).json({ error: "Alla obligatoriska fält måste fyllas i (companyName, jobTitle, location, startDate, description)" });
  }

  try {
    const created = await WorkExperience.create(req.body);
    res.status(201).json(created);
  } catch (err) {
    res.status(500).json({ error: "Kunde inte skapa posten", details: err.message });
  }
});

// PUT - Uppdaterar en befintlig arbetserfarenhet
router.put("/:id", async (req, res) => {
  const { companyName, jobTitle, location, startDate, description } = req.body;

  //Validering för de obligatoriska fälten
  if (!companyName || !jobTitle || !location || !startDate || !description) {
    return res.status(400).json({ error: "Alla obligatoriska fält måste fyllas i (companyName, jobTitle, location, startDate, description)" });
  }

  try {
    const updated = await WorkExperience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Posten hittades inte" });
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Kunde inte uppdatera posten", details: err.message });
  }
});

// DELETE - Raderar en arbetserfarenhet
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await WorkExperience.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: "Posten hittades inte" });
    }

    res.json({ message: "Posten raderades" });
  } catch (err) {
    res.status(500).json({ error: "Kunde inte radera posten" });
  }
});

// Exporterar routern så den kan användas i server.js
module.exports = router;