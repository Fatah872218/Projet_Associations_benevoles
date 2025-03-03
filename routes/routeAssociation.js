import express from "express";
import AssociationController from "../controllers/controllerAssociation.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import authorisation from "../middlewares/autorisationMiddleware.js";
const router = express.Router();
const associationController = new AssociationController();
// Créer une association
router.post("/", authMiddleware, authorisation(["association"]), (req, res) =>
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
router.put("/:id", authMiddleware, authorisation(["association"]), (req, res) =>
  associationController.update(req, res)
);

// Supprimer une association
router.delete(
  "/:id",
  authMiddleware,
  authorisation(["association"]),
  (req, res) => associationController.delete(req, res)
);

export default router;
