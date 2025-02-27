import mongoose from "mongoose";

const associationSchema = new mongoose.Schema({
  nomAssociation: { type: String, required: true },
  description: { type: String, required: true },
  utilisateurId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Utilisateur",
    required: true,
  },
});

export default mongoose.model("Association", associationSchema);
