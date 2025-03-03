import MissionRepository from "../repositories/repositoryMission.js";

class MissionService {
  constructor() {
    this.missionRepository = new MissionRepository();
  }

  //creation
  async createMission(missionData) {
    try {
      return await this.missionRepository.createM(missionData);
    } catch (err) {
      throw new Error(
        `Erreur lors de la création de la mission : ${err.message}`
      );
    }
  }
  // Récupérer une mission par son Id
  async getMissionById(id) {
    try {
      return await this.missionRepository.findById(id);
    } catch (err) {
      throw new Error(
        `Erreur lors de la récupération de l'mission : ${err.message}`
      );
    }
  }
  // recuperation mission avec associatioId
  async getMissionByAssociationId(associationId) {
    try {
      return await this.missionRepository.findByAssociationId(associationId);
    } catch (err) {
      throw new Error(
        `Erreur lors de la récupération de la mission : ${err.message}`
      );
    }
  }
  //mise a jour
  async updateMission(id, updateData) {
    try {
      return await this.missionRepository.updateMission(id, updateData);
    } catch (err) {
      throw new Error(
        `Erreur lors de la mise à jour de la mission : ${err.message}`
      );
    }
  }
  // supprimer asso:
  async deleteMissionn(id) {
    try {
      return await this.missionRepository.deleteMissionn(id);
    } catch (err) {
      throw new Error(
        `Erreur lors de la suppression de la mission : ${err.message}`
      );
    }
  }
}

export default MissionService;
