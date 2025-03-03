import express from "express";
import CandidatureController from "../controllers/controllerCandidature.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import authorisation from "../middlewares/autorisationMiddleware.js";

const router = express.Router();
const candidatureController = new CandidatureController();

// les bénévoles peuvent créer une candidature
router.post("/", authMiddleware, authorisation(["bénévole"]), (req, res) =>
  candidatureController.createCandidature(req, res)
);

// Tous les utilisateurs authentifiés peuvent récupérer une candidature par ID
router.get("/:id", authMiddleware, (req, res) =>
  candidatureController.getCandidatureById(req, res)
);

// Seules les associations peuvent mettre à jour ou supprimer une candidature
router.put("/:id", authMiddleware, authorisation(["association"]), (req, res) =>
  candidatureController.updateCandidature(req, res)
);
router.delete(
  "/:id",
  authMiddleware,
  authorisation(["association"]),
  (req, res) => candidatureController.deleteCandidature(req, res)
);

export default router;
