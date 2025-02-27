import UtilisateurService from "../services/serviceUtilisateur.js";

class UtilisateurController {
  constructor() {
    this.utilisateurService = new UtilisateurService();
  }

  async inscrire(req, res) {
    try {
      const utilisateur = await this.utilisateurService.inscrireUtilisateur(
        req.body
      );
      res.status(201).json(utilisateur);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async connecter(req, res) {
    try {
      const { email, motDePasse } = req.body;
      const utilisateur = await this.utilisateurService.connecterUtilisateur(
        email,
        motDePasse
      );
      res.status(200).json(utilisateur);
    } catch (err) {
      res.status(401).json({ message: err.message });
    }
  }
}

// Exporter la classe entière
export default UtilisateurController;
