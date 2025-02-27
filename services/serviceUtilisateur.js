import UtilisateurRepository from "../repositories/repositoryUtilisateur.js";
import argon2 from "argon2";

class UtilisateurService {
  constructor() {
    this.utilisateurRepository = new UtilisateurRepository();
  }

  async inscrireUtilisateur(utilisateurData) {
    console.log("mot de passe:", utilisateurData.motDePasse);
    try {
      utilisateurData.motDePasse = await argon2.hash(
        utilisateurData.motDePasse
      );
      console.log("mot de passe hachee:", utilisateurData.motDePasse);
      return await this.utilisateurRepository.createUtilisateur(
        utilisateurData
      );
      console.log("utilisateur cree");
    } catch (err) {
      throw new Error(
        `Erreur lors de l'inscription de l'utilisateur : ${err.message}`
      );
    }
  }

  async connecterUtilisateur(email, motDePasse) {
    try {
      const utilisateur = await this.utilisateurRepository.findByEmail(email);
      if (!utilisateur) throw new Error("Utilisateur non trouvé");

      const motDePasseValide = await argon2.verify(
        utilisateur.motDePasse,
        motDePasse
      );
      if (!motDePasseValide) throw new Error("Mot de passe incorrect");

      return utilisateur;
    } catch (err) {
      throw new Error(
        `Erreur lors de la connexion de l'utilisateur : ${err.message}`
      );
    }
  }
}

// Exporter la classe entière
export default UtilisateurService;
