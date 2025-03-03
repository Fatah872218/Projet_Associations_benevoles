import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Utilisateur from "../models/modeleUtilisateur.js";

import UtilisateurService from "../services/serviceUtilisateur.js";

// Charger les variables d'environnement
dotenv.config();

// Connexion à la base de données
connectDB();
const utilisateurService = new UtilisateurService();
const seeds = async () => {
  try {
    // Supprimer toutes les données existantes
    await Utilisateur.deleteMany({});

    // Données de test pour plusieurs utilisateurs (10 associations et 25 bénévoles)
    const utilisateurs = [
      // Associations (10)
      {
        nom: "Benali",
        prenom: "Sami",
        email: "sami.benali@example.com",
        motDePasse: "password001",
        role: "association",
      },
      {
        nom: "Lazhar",
        prenom: "Amira",
        email: "amira.lazhar@example.com",
        motDePasse: "password002",
        role: "association",
      },
      {
        nom: "Dupont",
        prenom: "Claire",
        email: "claire.dupont@example.com",
        motDePasse: "password003",
        role: "association",
      },
      {
        nom: "López",
        prenom: "Carlos",
        email: "carlos.lopez@example.com",
        motDePasse: "password004",
        role: "association",
      },
      {
        nom: "Müller",
        prenom: "Tina",
        email: "tina.mueller@example.com",
        motDePasse: "password005",
        role: "association",
      },
      {
        nom: "Garcia",
        prenom: "Esteban",
        email: "esteban.garcia@example.com",
        motDePasse: "password006",
        role: "association",
      },
      {
        nom: "Ricci",
        prenom: "Giovanni",
        email: "giovanni.ricci@example.com",
        motDePasse: "password007",
        role: "association",
      },
      {
        nom: "Novak",
        prenom: "Klara",
        email: "klara.novak@example.com",
        motDePasse: "password008",
        role: "association",
      },
      {
        nom: "Kovács",
        prenom: "Ádám",
        email: "adam.kovacs@example.com",
        motDePasse: "password009",
        role: "association",
      },
      {
        nom: "Peters",
        prenom: "Thomas",
        email: "thomas.peters@example.com",
        motDePasse: "password010",
        role: "association",
      },

      // Bénévoles (25)
      {
        nom: "Martin",
        prenom: "Alice",
        email: "alice.martin@example.com",
        motDePasse: "password011",
        role: "bénévole",
      },
      {
        nom: "Dupont",
        prenom: "Jean",
        email: "jean.dupont@example.com",
        motDePasse: "password012",
        role: "bénévole",
      },
      {
        nom: "Durand",
        prenom: "Marie",
        email: "marie.durand@example.com",
        motDePasse: "password013",
        role: "bénévole",
      },
      {
        nom: "Müller",
        prenom: "Lena",
        email: "lena.mueller@example.com",
        motDePasse: "password014",
        role: "bénévole",
      },
      {
        nom: "Garcia",
        prenom: "Carlos",
        email: "carlos.garcia@example.com",
        motDePasse: "password015",
        role: "bénévole",
      },
      {
        nom: "Bianchi",
        prenom: "Giulia",
        email: "giulia.bianchi@example.com",
        motDePasse: "password016",
        role: "bénévole",
      },
      {
        nom: "López",
        prenom: "Pedro",
        email: "pedro.lopez@example.com",
        motDePasse: "password017",
        role: "bénévole",
      },
      {
        nom: "Novak",
        prenom: "Marek",
        email: "marek.novak@example.com",
        motDePasse: "password018",
        role: "bénévole",
      },
      {
        nom: "Rossi",
        prenom: "Luca",
        email: "luca.rossi@example.com",
        motDePasse: "password019",
        role: "bénévole",
      },
      {
        nom: "Carter",
        prenom: "Emily",
        email: "emily.carter@example.com",
        motDePasse: "password020",
        role: "bénévole",
      },
      {
        nom: "Kovač",
        prenom: "Ana",
        email: "ana.kovac@example.com",
        motDePasse: "password021",
        role: "bénévole",
      },
      {
        nom: "Santos",
        prenom: "Beatriz",
        email: "beatriz.santos@example.com",
        motDePasse: "password022",
        role: "bénévole",
      },
      {
        nom: "Peters",
        prenom: "Tom",
        email: "tom.peters@example.com",
        motDePasse: "password023",
        role: "bénévole",
      },
      {
        nom: "Klein",
        prenom: "Anna",
        email: "anna.klein@example.com",
        motDePasse: "password024",
        role: "bénévole",
      },
      {
        nom: "Schneider",
        prenom: "David",
        email: "david.schneider@example.com",
        motDePasse: "password025",
        role: "bénévole",
      },
      {
        nom: "Blanc",
        prenom: "Julien",
        email: "julien.blanc@example.com",
        motDePasse: "password026",
        role: "bénévole",
      },
      {
        nom: "Tremblay",
        prenom: "Clara",
        email: "clara.tremblay@example.com",
        motDePasse: "password027",
        role: "bénévole",
      },
      {
        nom: "Bourgeois",
        prenom: "Pierre",
        email: "pierre.bourgeois@example.com",
        motDePasse: "password028",
        role: "bénévole",
      },
      {
        nom: "Ali",
        prenom: "Hassan",
        email: "hassan.ali@example.com",
        motDePasse: "password029",
        role: "bénévole",
      },
      {
        nom: "El Amrani",
        prenom: "Zineb",
        email: "zineb.elamrani@example.com",
        motDePasse: "password030",
        role: "bénévole",
      },
      {
        nom: "Mohamed",
        prenom: "Salim",
        email: "salim.mohamed@example.com",
        motDePasse: "password031",
        role: "bénévole",
      },
      {
        nom: "Hassan",
        prenom: "Rachid",
        email: "rachid.hassan@example.com",
        motDePasse: "password032",
        role: "bénévole",
      },
      {
        nom: "Ben Youssef",
        prenom: "Leila",
        email: "leila.benyoussef@example.com",
        motDePasse: "password033",
        role: "bénévole",
      },
      {
        nom: "Sadiq",
        prenom: "Moussa",
        email: "moussa.sadiq@example.com",
        motDePasse: "password034",
        role: "bénévole",
      },
      {
        nom: "El Khatib",
        prenom: "Nadia",
        email: "nadia.elkhatib@example.com",
        motDePasse: "password035",
        role: "bénévole",
      },
      {
        nom: "Tarek",
        prenom: "Sabrina",
        email: "sabrina.tarek@example.com",
        motDePasse: "password036",
        role: "bénévole",
      },
      {
        nom: "Bouazizi",
        prenom: "Hassan",
        email: "hassan.bouazizi@example.com",
        motDePasse: "password037",
        role: "bénévole",
      },
      {
        nom: "Fathi",
        prenom: "Samia",
        email: "samia.fathi@example.com",
        motDePasse: "password038",
        role: "bénévole",
      },
      {
        nom: "Lahlou",
        prenom: "Omar",
        email: "omar.lahlou@example.com",
        motDePasse: "password039",
        role: "bénévole",
      },
    ];

    // Insérer plusieurs utilisateurs en une seule opération
    for (const utilisateur of utilisateurs) {
      await utilisateurService.inscrireUtilisateur(utilisateur);
    }

    console.log("Données de test insérées avec succès !");
  } catch (err) {
    console.error("Erreur lors de l'insertion des données de test :", err);
  } finally {
    process.exit(0); // Quitter le script
  }
};

seeds();
