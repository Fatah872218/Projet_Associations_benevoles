import mongoose from "mongoose";

const missionSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  associationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Association",
    required: true,
  },
  statut: { type: String, enum: ["ouvert", "fermé"], default: "ouvert" },
});

export default mongoose.model("Mission", missionSchema);
