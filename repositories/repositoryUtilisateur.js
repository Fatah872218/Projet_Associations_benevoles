import Utilisateur from "../models/modeleUtilisateur.js";

class UtilisateurRepository {
  async createUtilisateur(utilisateurData) {
    try {
      const utilisateur = new Utilisateur(utilisateurData);
      return await utilisateur.save();
    } catch (err) {
      throw new Error(
        `Erreur lors de la création de l'utilisateur : ${err.message}`
      );
    }
  }
  // Trouver les utilisateurs
  async findUtilisateurs() {
    try {
      return await Utilisateur.find();
    } catch (err) {
      throw new Error(
        `Erreur lors de la récupération des utilisateurs:${err.message}`
      );
    }
  }

  // Trouver un utilisateur par email
  async findByEmail(email) {
    try {
      return await Utilisateur.findOne({ email });
    } catch (err) {
      throw new Error(
        `Erreur lors de la recherche de l'utilisateur par email : ${err.message}`
      );
    }
  }

  // Trouver un utilisateur par un id
  async findById(id) {
    try {
      return await Utilisateur.findById(id);
    } catch (err) {
      throw new Error(
        `Erreur lors de la recherche de l'utilisateur par id : ${err.message}`
      );
    }
  }
  // Mettre à jour un utilisateur
  async update(id, updateData) {
    try {
      return await Utilisateur.findByIdAndUpdate(id, updateData, { new: true });
    } catch (err) {
      throw new Error(
        `Erreur lors de la mise à jour de l'utilisateur : ${err.message}`
      );
    }
  }

  // Supprimer un utilisateur
  async delete(id) {
    try {
      return await Utilisateur.findByIdAndDelete(id);
    } catch (err) {
      throw new Error(
        `Erreur lors de la suppression de l'utilisateur : ${err.message}`
      );
    }
  }
}

export default UtilisateurRepository;
