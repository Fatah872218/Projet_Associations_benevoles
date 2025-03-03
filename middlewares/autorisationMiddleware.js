const authorisation = (roles) => {
  return (req, res, next) => {
    try {
      // Récupération de role injecté deja dans le tokenA:
      const utilisateurRole = req.utilisateur.role;

      // Vérifier l'autorisation:
      if (!roles.includes(utilisateurRole)) {
        return res.status(403).json({ message: "Accès refusé pour ce role" });
      }

      next();
    } catch (err) {
      res
        .status(500)
        .json({ message: "Erreur lors de la vérification des autorisations" });
    }
  };
};

export default authorisation;
