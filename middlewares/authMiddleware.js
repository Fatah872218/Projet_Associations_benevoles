import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authMiddleware = (req, res, next) => {
  try {
    // Récupérer le token depuis les cookies
    const token = req.cookies.tokenA;
    if (!token) throw new Error("Accès non autorisé");

    // Vérifier le token
    jwt.verify(token, process.env.JWT_SECRET, (err, utilisateur) => {
      console.error("l'erreur est:", err);
      if (err) return res.status(403).json({ message: "Token invalide" });

      req.utilisateur = utilisateur;
      next();
    });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

export default authMiddleware;
