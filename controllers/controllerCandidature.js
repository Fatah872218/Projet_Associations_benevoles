import CandidatureService from "../services/serviceCandidature.js";

class CandidatureController {
  constructor() {
    this.candidatureService = new CandidatureService();
  }
  async createCandidature(req, res) {
    try {
      const candidature = await this.candidatureService.createCandidature(
        req.body
      );
      res.status(201).json(candidature);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async getCandidatureById(req, res) {
    try {
      const candidature = await this.candidatureService.getCandidatureById(
        req.params.id
      );
      res.status(200).json(candidature);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async getCandidatureByMissionId(req, res) {
    try {
      const candidatures =
        await this.candidatureService.getCandidaturesByMissionId(
          req.params.missionId
        );
      res.status(200).json(candidatures);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async getCandidatureByBenevoleId(req, res) {
    try {
      const candidatures =
        await this.candidatureService.getCandidaturesByBenevoleId(
          req.params.benevoleId
        );
      res.status(200).json(candidatures);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async updateCandidature(req, res) {
    try {
      const candidature = await this.candidatureService.updateCandidature(
        req.params.id,
        req.body
      );
      res.status(200).json(candidature);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async deleteCandidature(req, res) {
    try {
      await this.candidatureService.deleteCandidature(req.params.id);
      res.status(200).json({ message: "Candidature supprimée avec succès" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default CandidatureController;
