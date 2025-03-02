import Association from "../models/modeleAssociation.js";

class AssociationRepository {
  async createAsso(associationData) {
    try {
      const association = new Association(associationData);
      return await association.save();
    } catch (err) {
      throw new Error(
        `Erreur lors de la création de l'Association : ${err.message}`
      );
    }
  }

  // Trouver une asso par un id
  async findById(id) {
    try {
      return await Association.findById(id);
    } catch (err) {
      throw new Error(
        `Erreur lors de la recherche de l'Association par id : ${err.message}`
      );
    }
  }
  //touver une association avec utilisateurId
  async findByUtilsateurId(utilisateurId) {
    try {
      return await Association.findOne(utilisateurId);
    } catch (err) {
      throw new Error(
        `Erreur lors de la recherche de l'Association par utulisateurId : ${err.message}`
      );
    }
  }

  // Mettre à jour un asso
  async updateAsso(id, updateData) {
    try {
      return await Association.findByIdAndUpdate(id, updateData, { new: true });
    } catch (err) {
      throw new Error(
        `Erreur lors de la mise à jour de l'Association : ${err.message}`
      );
    }
  }

  // Supprimer une asso
  async deleteAsso(id) {
    try {
      return await Association.findByIdAndDelete(id);
    } catch (err) {
      throw new Error(
        `Erreur lors de la suppression de l'Association : ${err.message}`
      );
    }
  }
}

export default AssociationRepository;
