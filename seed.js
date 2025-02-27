import connectDB from "./config/db.js";
import Utilisateur from "./models/modeleUtilisateur.js";

connectDB();

const seed = async () => {
  try {
    await Utilisateur.deleteMany({});

    await Utilisateur.create({
      nom: "Mtin",
      prenom: "ice",
      email: "alicin@example.com",
      motDePasse: "password123",
      role: "bénévole",
    });

    console.log("Données de test insérées avec succès !");
  } catch (err) {
    console.error("Erreur lors de l'insertion des données de test :", err);
  } finally {
    process.exit(0);
  }
};

seed();
