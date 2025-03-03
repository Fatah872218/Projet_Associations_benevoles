import Mission from "../models/modeleMission.js";
class MissionRepository {
  async createM(missionData) {
    try {
      const mission = new Mission(missionData);
      return await mission.save();
    } catch (err) {
      throw new Error(
        `Erreur lors de la création de la mission : ${err.message}`
      );
    }
  }
  // Trouver une mission par un id
  async findById(id) {
    try {
      return await Mission.findById(id);
    } catch (err) {
      throw new Error(
        `Erreur lors de la recherche de la mission par id : ${err.message}`
      );
    }
  }
  //touver une mission avec associationId
  async findByAssociationId(associationId) {
    try {
      return await Mission.findOne(associationId);
    } catch (err) {
      throw new Error(
        `Erreur lors de la recherche de lamission par associationId : ${err.message}`
      );
    }
  }

  // Mettre à jour une mission
  async updateMiss(id, updateData) {
    try {
      return await Mission.findByIdAndUpdate(id, updateData, { new: true });
    } catch (err) {
      throw new Error(
        `Erreur lors de la mise à jour de l'mission : ${err.message}`
      );
    }
  }

  // Supprimer une mission
  async deleteMiss(id) {
    try {
      return await Mission.findByIdAndDelete(id);
    } catch (err) {
      throw new Error(
        `Erreur lors de la suppression de l'a mission : ${err.message}`
      );
    }
  }
}

export default MissionRepository;
