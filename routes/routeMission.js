import express from "express";
import MissionController from "../controllers/controllerMission.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import authorisation from "../middlewares/autorisationMiddleware.js";

const router = express.Router();
const missionController = new MissionController();

// les utilisateurs qui ont un role association ont le droit de creer des missions:
router.post("/", authMiddleware, authorisation(["association"]), (req, res) =>
  missionController.createMission(req, res)
);

// Tous les utilisateurs authentifiés peuvent récupérer une mission par ID
router.get("/:id", authMiddleware, (req, res) =>
  missionController.getById(req, res)
);

// les utilisateurs qui ont un role association peuvent mettre à jour ou supprimer une mission
router.put("/:id", authMiddleware, authorisation(["association"]), (req, res) =>
  missionController.updateMission(req, res)
);
router.delete(
  "/:id",
  authMiddleware,
  authorisation(["association"]),
  (req, res) => missionController.deleteMission(req, res)
);

export default router;
