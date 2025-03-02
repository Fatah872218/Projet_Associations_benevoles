import mongoose from "mongoose";
import argon2 from "argon2";

const utilisateurSchema = new mongoose.Schema({
  nom: { type: String, required: true, trim: true },
  prenom: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  motDePasse: { type: String, required: true, trim: true },
  telephone: { type: String },
  role: {
    type: String,
    enum: ["bénévole", "association"],
    required: true,
    trim: true,
  },
  competences: { type: String },
  dateInscription: { type: Date, default: Date.now },
});

export default mongoose.model("Utilisateur", utilisateurSchema);
