import AssociationService from "../services/serviceAssociation.js";

class AssociationController {
  constructor() {
    this.associationService = new AssociationService();
  }
  //creation
  async createAssociation(req, res) {
    try {
      const association = await this.associationService.createAssociation(
        req.body
      );
      res.status(201).json(association);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  // recuperation par id

  async getById(req, res) {
    try {
      const association = await this.associationService.getAssociationById(
        req.params.id
      );
      res.status(200).json(association);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  //recuperation par utilasateuId:
  async getByUtilisateurId(req, res) {
    try {
      const association =
        await this.associationService.getAssociationByUtilisateurId(
          req.params.utilisateurId
        );
      res.status(200).json(association);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  // mise a jour:
  async updateAsso(req, res) {
    try {
      const association = await this.associationService.updateAssociation(
        req.params.id,
        req.body
      );
      res.status(200).json(association);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  //supression
  async deleteAsso(req, res) {
    try {
      await this.associationService.deleteAssociation(req.params.id);
      res.status(200).json({ message: "Association supprimée avec succès" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default AssociationController;
