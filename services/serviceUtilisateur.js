import UtilisateurRepository from "../repositories/repositoryUtilisateur.js";
import argon2 from "argon2";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Charger les variables d'environnement
dotenv.config();

class UtilisateurService {
  constructor() {
    this.utilisateurRepository = new UtilisateurRepository();
  }

  async inscrireUtilisateur(utilisateurData) {
    try {
      const utilisateurExiste = await this.utilisateurRepository.findByEmail(
        utilisateurData.email
      );

      if (utilisateurExiste)
        throw new Error(
          ` erreur : cet utilisateur existe déjà dans la base de donnée`
        );
      //etape1:hachage de mot de passe:
      utilisateurData.motDePasse = await argon2.hash(
        utilisateurData.motDePasse
      );
      /* console.log("mot de passe hachee:", utilisateurData.motDePasse); */
      return await this.utilisateurRepository.createUtilisateur(
        utilisateurData
      );
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
      // Générer un token JWT
      const token = jwt.sign(
        { id: utilisateur._id, role: utilisateur.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      console.log("Token généré :", token);
      return { utilisateur, token };
    } catch (err) {
      throw new Error(
        `Erreur lors de la connexion de l'utilisateur : ${err.message}`
      );
    }
  }
  // Méthode pour récupérer un utilisateur par son email
  async getUtilisateurByEmail(email) {
    const utilisateur = await this.utilisateurRepository.findByEmail(email);
    if (!utilisateur) {
      throw new Error("Utilisateur non trouvé"); // Si l'utilisateur n'est pas trouvé, une erreur est lancée
    }
    return utilisateur;
  }

  // Récupérer un utilisateur par son Id
  async getUtilisateurById(id) {
    try {
      return await utilisateurRepository.findById(id);
    } catch (err) {
      throw new Error(
        `Erreur lors de la récupération de l'utilisateur : ${err.message}`
      );
    }
  }
}

// Exporter la classe entière
export default UtilisateurService;
