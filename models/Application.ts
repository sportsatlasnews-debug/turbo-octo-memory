import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
  type: { type: String, enum: ['job', 'volunteer'], required: true },
  targetGroup: String, // "mike" ose "zoterinjte"
  fullName: { type: String, required: true },
  birthDate: String,
  idNumber: String,
  address: String,
  city: String,
  zipCode: String,
  phone: { type: String, required: true },
  email: { type: String, required: true },
  maritalStatus: String,

  // Arsimi & Eksperienca
  education: String,
  institution: String,
  graduationYear: String,
  hasExperience: String, // "Po" / "Jo"
  experienceDetails: String,
  specificExperience: {
    familyOrInst: String,
    childAge: String,
    duration: String,
    tasks: String
  },

  // Aftesite & Disponueshmeria
  skills: [String],
  languages: [String],
  availability: [String],
  specificHours: String,
  startDate: String,
  
  // Pagesa
  paymentPreference: String,
  expectedAmount: String,
  isNegotiable: String,

  // Referencat
  references: [{
    name: String,
    phone: String
  }],

  // Te dhena vullnetari
  whyVolunteer: String,
  healthCondition: String,
  certifications: String,

  status: { type: String, default: 'new' },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Application || mongoose.model("Application", ApplicationSchema);