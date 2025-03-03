import mongoose from "mongoose";

const candidatureSchema = new mongoose.Schema({
  missionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mission",
    required: true,
  },
  bénévoleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Utilisateur",
    required: true,
  },
  statut: {
    type: String,
    enum: ["en attente", "acceptée", "refusée"],
    default: "en attente",
  },
  message: { type: String },
  dateCandidature: { type: Date, default: Date.now },
});

export default mongoose.model("Candidature", candidatureSchema);
