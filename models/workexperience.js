const express = require("express");
const router = express.Router();

const WorkExperience = require("./models/WorkExperience");

router.get("/", async (req, res) => {
  const data = await WorkExperience.find();
  res.json(data);
});

router.post("/", async (req, res) => {
  if (
    !req.body.companyName ||
    !req.body.jobTitle ||
    !req.body.location ||
    !req.body.startDate ||
    !req.body.description
  ) {
    return res.status(400).json({ error: "Alla fält måste fyllas i!" });
  }

  const created = await WorkExperience.create(req.body);
  res.status(201).json(created);
});

router.put("/:id", async (req, res) => {
  const updated = await WorkExperience.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  await WorkExperience.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;