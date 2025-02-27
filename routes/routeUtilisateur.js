import express from "express";
import UtilisateurController from "../controllers/controllerUtilisateur.js";

const router = express.Router();
const utilisateurController = new UtilisateurController(); // Instancier la classe

router.post("/inscription", (req, res) =>
  utilisateurController.inscrire(req, res)
);
router.post("/connexion", (req, res) =>
  utilisateurController.connecter(req, res)
);

export default router;
