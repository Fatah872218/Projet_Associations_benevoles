Plateforme de Gestion de Missions bénévoles/association:
-------------------------------------------------------
Ce projet est une plateforme de gestion de missions qui permet aux bénévoles de postuler à des missions proposées par des associations. Une fois qu'un bénévole postule, une association peut accepter ou refuser la candidature. La plateforme offre les fonctionnalités suivantes :

1_Authentification :

.Les utilisateurs peuvent s'inscrire et se connecter.

.Deux types d'utilisateurs : bénévoles et associations.

.Authentification via JWT (JSON Web Tokens).

2_Gestion des missions :

.Les associations peuvent créer, modifier et supprimer des missions.

.Les missions ont un titre, une description, une date, et sont associées à une association.

3_Gestion des candidatures :

.Les bénévoles peuvent postuler à des missions.

.Les associations peuvent accepter ou refuser les candidatures.

.Le statut des candidatures peut être en attente, acceptée, ou refusée.

4_Affichage des missions :

.Les bénévoles peuvent consulter la liste des missions disponibles.

.Les associations peuvent consulter les candidatures en attente pour chaque mission.
------------------------------------------------------------------------------------------------------------------------

Instructions pour installer et lancer l’application:
**Prérequis:Node.js Express MongoDB Mongoose npm github 
**Étapes d'installation
1.Cloner le dépôt :git clone https://github.com/votre-utilisateur/votre-projet.git
2.initialiser le projet  Installer les dépendances :npm init -y   et npm install
3.Configurer les variables d'environnement :Créez un fichier .env à la racine du projet avec les variables suivantes :

MONGODB_URI=mongodb://localhost:***/*********
PORT=****
JWT_SECRET=********************
JWT_EXPIRE=**

4.Lancer l'application :npm start
5.Accéder à l'application :L'application sera disponible à l'adresse : http://localhost:****
6.lancer l'application en mode développement avec nodemon :npm run dev

--------------------------------------------------------------------------------------------------------------------------------

Justification du choix technologique (SQL vs NoSQL):
***Pourquoi MongoDB (NoSQL) ?
1.Flexibilité :

MongoDB est une base de données NoSQL, ce qui permet une grande flexibilité dans la structure des données. Cela est particulièrement utile pour un projet où les besoins peuvent évoluer rapidement.

2.Scalabilité :

MongoDB est conçu pour être facilement scalable, ce qui est important si l'application doit gérer un grand nombre d'utilisateurs et de missions.

3.Document-oriented :

Les données sont stockées sous forme de documents JSON, ce qui est très pratique pour les développeurs JavaScript/Node.js.

4.Performance :

MongoDB offre de bonnes performances pour les opérations de lecture et d'écriture, ce qui est essentiel pour une plateforme de gestion de missions.

***Pourquoi pas SQL ?
.Structure rigide : Les bases de données SQL nécessitent un schéma prédéfini, ce qui peut limiter la flexibilité.

.Complexité : Pour ce projet, la simplicité et la flexibilité de MongoDB sont plus adaptées que la rigidité d'une base de données SQL.
---------------------------------------------------------------------------------------------------------------------------------------
Informations complémentaires pour l’utilisation
**Endpoints API
1.Utilisateurs
.Inscription : POST /api/utilisateurs/inscription
.Connexion : POST /api/utilisateurs/connexion
.Récupérer l'utilisateur connecté : GET /api/utilisateurs/utilisateur
.Déconnexion : POST /api/utilisateurs/deconnexion

2.Associations
.Créer une association : POST /api/associations
.Récupérer une association par ID : GET /api/associations/:id
.Mettre à jour une association : PUT /api/associations/:id
.Supprimer une association : DELETE /api/associations/:id

3.Missions
.Créer une mission : POST /api/missions/
.Récupérer une mission par ID : GET /api/missions/:id
.Mettre à jour une mission : PUT /api/missions/:id
.Supprimer une mission : DELETE /api/missions/:id

4.Candidatures
.Créer une candidature : POST /api/candidatures/
.Récupérer une candidature par ID : GET /api/candidatures/:id
.Mettre à jour une candidature : PUT /api/candidatures/:id
.Supprimer une candidature : DELETE /api/candidatures/:id

**Exemple de requêtes avec Postman
1.Inscription d'un utilisateur :

URL : POST http://localhost:****/api/utilisateurs/inscription

Body (JSON) :
{
  "nom": "Martin",
  "prenom": "Alice",
  "email": "alice.martin@example.com",
  "motDePasse": "password123",
  "role": "bénévole"
}

2.Connexion d'un utilisateur :

URL : POST http://localhost:****/api/utilisateurs/connexion

Body (JSON) :
{
  "email": "alice.martin@example.com",
  "motDePasse": "password123"
}

3.Créer une mission :

URL : POST http://localhost:****/api/missions

Body (JSON) :
{
  "titre": "Nettoyage de plage",
  "description": "Aider à nettoyer la plage de la ville.",
  "date": "2023-10-20T09:00:00.000Z",
  "associationId": "64f1a2b3c4d5e6f7a8b9c0d3"
}


****Auteur:
F.DJEDDI


