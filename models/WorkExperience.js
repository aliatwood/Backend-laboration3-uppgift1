//Importerar mongoose
const mongoose = require("mongoose");

// Skapar ett schema för arbetserfarenheter
const WorkExperienceSchema = new mongoose.Schema({

  //Företagsnamn som är obligatoriskt och sparas som text
  companyName: {
    type: String,
    required: [true, "Företagsnamn är obligatoriskt"],
    trim: true
  },

  //Jobbtitel som är obligatoriskt och sparas som text
  jobTitle: {
    type: String,
    required: [true, "Jobbtitel är obligatoriskt"],
    trim: true
  },

  //Location som är obligatoriskt och sparas som text
  location: {
    type: String,
    required: [true, "Plats är obligatoriskt"],
    trim: true
  },

  //Startdatum som är obligatoriskt och sparas som datum
  startDate: {
    type: Date,
    required: [true, "Startdatum är obligatoriskt"]
  },

  //Slutdatum som ej är obligatoriskt och sparas som datum
  endDate: {
    type: Date,
    default: null
  },

  //Description som är obligatoriskt och sparas som text
  description: {
    type: String,
    required: [true, "Beskrivning är obligatoriskt"],
    trim: true
  }
});

// Skapar och exporterar modellen
module.exports = mongoose.model("WorkExperience", WorkExperienceSchema);