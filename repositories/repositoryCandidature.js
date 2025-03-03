import Candidature from "../models/modeleCandidature.js";
class CandidatureRepository {
  async create(candidatureData) {
    try {
      const candidature = new Candidature(candidatureData);
      return await candidature.save();
    } catch (err) {
      throw new Error(
        `Erreur lors de la création de la candidature : ${err.message}`
      );
    }
  }
  // Trouver une candidature par un id
  async findById(id) {
    try {
      return await Candidature.findById(id);
    } catch (err) {
      throw new Error(
        `Erreur lors de la recherche de la candidature par id : ${err.message}`
      );
    }
  }
  //touver une candidature avec missionId
  async findByMissionId(missionId) {
    try {
      return await Candidature.findOne(missionId);
    } catch (err) {
      throw new Error(
        `Erreur lors de la recherche de lacandidature par missionId : ${err.message}`
      );
    }
  }

  //touver une candidature avec benevoleId
  async findByBenevoleId(benevoleId) {
    try {
      return await Candidature.findOne(benevoleId);
    } catch (err) {
      throw new Error(
        `Erreur lors de la recherche de lacandidature par benevoleId : ${err.message}`
      );
    }
  }

  // Mettre à jour une candidature
  async updateCandidature(id, updateData) {
    try {
      return await Candidature.findByIdAndUpdate(id, updateData, { new: true });
    } catch (err) {
      throw new Error(
        `Erreur lors de la mise à jour de l'candidature : ${err.message}`
      );
    }
  }

  // Supprimer une candidature
  async deleteCandidature(id) {
    try {
      return await Candidature.findByIdAndDelete(id);
    } catch (err) {
      throw new Error(
        `Erreur lors de la suppression de la mission : ${err.message}`
      );
    }
  }
}

export default CandidatureRepository;
