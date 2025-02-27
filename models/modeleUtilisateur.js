import mongoose from "mongoose";
import argon2 from "argon2";

const utilisateurSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  motDePasse: { type: String, required: true },
  telephone: { type: String },
  role: { type: String, enum: ["bénévole", "association"], required: true },
  dateInscription: { type: Date, default: Date.now },
});

export default mongoose.model("Utilisateur", utilisateurSchema);
