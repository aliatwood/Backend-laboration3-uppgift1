const mongoose = require("mongoose");

const WorkExperienceSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: [true, "Företagsnamn är obligatoriskt"],
    trim: true
  },
  jobTitle: {
    type: String,
    required: [true, "Jobbtitel är obligatoriskt"],
    trim: true
  },
  location: {
    type: String,
    required: [true, "Plats är obligatoriskt"],
    trim: true
  },
  startDate: {
    type: Date,
    required: [true, "Startdatum är obligatoriskt"]
  },
  endDate: {
    type: Date,
    default: null
  },
  description: {
    type: String,
    required: [true, "Beskrivning är obligatoriskt"],
    trim: true
  }
});

module.exports = mongoose.model("WorkExperience", WorkExperienceSchema);