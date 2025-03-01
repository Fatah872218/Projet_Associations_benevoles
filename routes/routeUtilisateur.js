import express from "express";
import UtilisateurController from "../controllers/controllerUtilisateur.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const router = express.Router();
const utilisateurController = new UtilisateurController(); // Instancier la classe

router.post("/inscription", (req, res) =>
  utilisateurController.inscrire(req, res)
);
router.post("/connexion", (req, res) =>
  utilisateurController.connecter(req, res)
);

// Récupérer l'utilisateur connecté (protégé par authMiddleware)
router.get("/utilisateur", authMiddleware, (req, res) =>
  utilisateurController.getUtilisateur(req, res)
);

// Déconnexion
router.post("/deconnexion", authMiddleware, (req, res) =>
  utilisateurController.deconnecter(req, res)
);
export default router;
