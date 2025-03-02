import AssociationRepository from "../repositories/repositoryAssociation.js";

class AssociationService {
  constructor() {
    this.associationRepository = new AssociationRepository();
  }
  //creation
  async createAssociation(associationData) {
    try {
      return await this.associationRepository.createAsso(associationData);
    } catch (err) {
      throw new Error(
        `Erreur lors de la création de l'association : ${err.message}`
      );
    }
  }

  // Récupérer une ass par son Id
  async getAssociationById(id) {
    try {
      return await this.associationRepository.findById(id);
    } catch (err) {
      throw new Error(
        `Erreur lors de la récupération de l'association : ${err.message}`
      );
    }
  }
  // recuperation association avec utilsateurId
  async getAssociationByUtilisateurId(utilisateurId) {
    try {
      return await this.associationRepository.findByUtilsateurId(utilisateurId);
    } catch (err) {
      throw new Error(
        `Erreur lors de la récupération de l'association : ${err.message}`
      );
    }
  }
  //mise a jour
  async updateAssociation(id, updateData) {
    try {
      return await this.associationRepository.updateAsso(id, updateData);
    } catch (err) {
      throw new Error(
        `Erreur lors de la mise à jour de l'association : ${err.message}`
      );
    }
  }
  // supprimer asso:
  async deleteAssociation(id) {
    try {
      return await this.associationRepository.deleteAsso(id);
    } catch (err) {
      throw new Error(
        `Erreur lors de la suppression de l'association : ${err.message}`
      );
    }
  }
}

export default AssociationService;
