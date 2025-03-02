import express from "express";
import AssociationController from "../controllers/controllerAssociation.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();
const associationController = new AssociationController();
// Créer une association
router.post("/", authMiddleware, (req, res) =>
  associationController.createAssociation(req, res)
);

// Récupérer une association par ID
router.get("/:id", authMiddleware, (req, res) =>
  associationController.getById(req, res)
);

// Récupérer une association par utilisateurId
router.get("/utilisateur/:utilisateurId", authMiddleware, (req, res) =>
  associationController.getByUtilisateurId(req, res)
);

// Mettre à jour une association
router.put("/:id", authMiddleware, (req, res) =>
  associationController.update(req, res)
);

// Supprimer une association
router.delete("/:id", authMiddleware, (req, res) =>
  associationController.delete(req, res)
);

export default router;
