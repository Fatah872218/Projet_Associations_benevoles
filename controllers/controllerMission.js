import MissionService from "../services/serviceMission.js";

class MissionController {
  constructor() {
    this.missionService = new MissionService();
  }

  async createMission(req, res) {
    try {
      const mission = await this.missionService.createMission(req.body);
      res.status(201).json(mission);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async getById(req, res) {
    try {
      const mission = await this.missionService.getMissionById(req.params.id);
      res.status(200).json(mission);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async getByAssociationId(req, res) {
    try {
      const missions = await this.missionService.getMissionByAssociationId(
        req.params.associationId
      );
      res.status(200).json(missions);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async updateMission(req, res) {
    try {
      const mission = await this.missionService.updateMission(
        req.params.id,
        req.body
      );
      res.status(200).json(mission);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async deleteMission(req, res) {
    try {
      await this.missionService.deleteMission(req.params.id);
      res.status(200).json({ message: "Mission supprimée avec succès" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}
export default MissionController;
