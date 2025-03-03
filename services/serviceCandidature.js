import CandidatureRepository from "../repositories/repositoryCandidature.js";
class CandidatureService {
  constructor() {
    this.candidatureRepository = new CandidatureRepository();
  }
  //creer une candidature:
  async createCandidature(candidatureData) {
    return await this.candidatureRepository.create(candidatureData);
  }
  catch(err) {
    throw new Error(
      `Erreur lors de la création de la candidature : ${err.message}`
    );
  }
  //recuperation candidature par id:
  async getCandidatureById(id) {
    try {
      return await this.candidatureRepository.findById(id);
    } catch (err) {
      throw new Error(
        `Erreur lors de la récupération de la candidature : ${err.message}`
      );
    }
  }
  //recuperation candidature par missionId:
  async getCandidaturesByMissionId(missionId) {
    try {
      return await this.candidatureRepository.findByMissionId(missionId);
    } catch (err) {
      throw new Error(
        `Erreur lors de la récupération des candidatures : ${err.message}`
      );
    }
  }
  // recuperation candidature par benevoleId:
  async getCandidaturesByBenevoleId(benevoleId) {
    try {
      return await this.candidatureRepository.findByBenevoleId(benevoleId);
    } catch (err) {
      throw new Error(
        `Erreur lors de la récupération des candidatures : ${err.message}`
      );
    }
  }
  // mettre a jour candidature:
  async updateCandidature(id, updateData) {
    try {
      return await this.candidatureRepository.updateCandidature(id, updateData);
    } catch (err) {
      throw new Error(
        `Erreur lors de la mise à jour de la candidature : ${err.message}`
      );
    }
  }
  // supprimer une candidature:
  async deleteCandidature(id) {
    try {
      return await this.candidatureRepository.deleteCandidature(id);
    } catch (err) {
      throw new Error(
        `Erreur lors de la suppression de la candidature : ${err.message}`
      );
    }
  }
}

export default CandidatureService;
