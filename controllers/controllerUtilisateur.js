import UtilisateurService from "../services/serviceUtilisateur.js";

class UtilisateurController {
  constructor() {
    this.utilisateurService = new UtilisateurService();
  }
  //comment s'inscrire:
  async inscrire(req, res) {
    if (
      !req.body.nom ||
      !req.body.prenom ||
      !req.body.email ||
      !req.body.motDePasse ||
      !req.body.role
    ) {
      res.status(400).json(`erreur ,l'un des champ est vide`);
    } else {
      try {
        const utilisateur = await this.utilisateurService.inscrireUtilisateur(
          req.body
        );

        res
          .status(201)
          .json(
            `nom:${utilisateur.nom}  prenom: ${utilisateur.prenom} , est enregistré`
          );
        console.info("l utilisateur est cree");
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    }
  }
  //comment se connecter:
  async connecter(req, res) {
    // verifier si l'utilisateur existe dans le body
    if (!req.body.email || !req.body.motDePasse) {
      res.status(400).json(`erreur ,l'un des champ est vide`);
    } else {
      try {
        const { email, motDePasse } = req.body;
        const { utilisateur, token } =
          await this.utilisateurService.connecterUtilisateur(
            /* req.body.email,
          req.body.motDePasse */
            email,
            motDePasse
          );

        // Envoyer le token dans un cookie:("token" cest le nom de cookie)
        res.cookie("tokenA", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production", // Cookie sécurisé uniquement en production
          sameSite: "strict",
          expires: new Date(Date.now() + 36000),
        });
        res
          .status(200)
          .json(
            `nom:${utilisateur.nom}  prenom: ${utilisateur.prenom},id: ${utilisateur.id} est connecté`
          );
      } catch (err) {
        res.status(401).json({ message: err.message });
      }
    }
  }
  // Récupérer l'utilisateur connecté
  async getUtilisateur(req, res) {
    try {
      const utilisateur = await this.utilisateurService.getUtilisateurById(
        req.body._id
      );
      res.status(200).json(utilisateur);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  // comment se deconnecter:
  async deconnecter(req, res) {
    try {
      res.clearCookie("tokenA", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Cookie sécurisé uniquement en production
        sameSite: "strict",
      });
      res.status(200).json({ message: "Déconnexion réussie" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

// Exporter la classe entière
export default UtilisateurController;
