import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import utilisateurRoutes from "./routes/routeUtilisateur.js";
import associationRoutes from "./routes/routeAssociation.js";

//import errorHandler from "./middlewares/errorHandler.js";

// Charger les variables d'environnement
dotenv.config();

// Créer une instance d'Express
const app = express();

// Middleware
app.use(cors()); // Autoriser les requêtes cross-origin
app.use(express.json()); // Parser les requêtes JSON
app.use(cookieParser()); // Utiliser cookie-parser

// Connexion à la base de données
connectDB();

// Routes
app.use("/api/utilisateurs", utilisateurRoutes);
app.use("/api/associations", associationRoutes);

// Middleware de gestion des erreurs
/* app.use(errorHandler); */

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
