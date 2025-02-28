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
        res
          .status(200)
          .json(
            `nom:${utilisateur.nom}  prenom: ${utilisateur.prenom}, est connecté`
          );
      } catch (err) {
        res.status(401).json({ message: err.message });
      }
    }
  }
}

// Exporter la classe entière
export default UtilisateurController;
