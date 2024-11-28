module.exports = {
  apps: [
    {
      name: "WEB-Jouskaio.me", // Nom de l'application dans PM2
      script: "dist/server.js", // Fichier principal à exécuter
      instances: "max", // Utilisation de tous les cœurs disponibles
      exec_mode: "cluster", // Mode de cluster pour maximiser les performances
      env: {
        NODE_ENV: "development", // Variables d'environnement pour dev
      },
      env_production: {
        NODE_ENV: "production", // Variables d'environnement pour prod
      },
    },
  ],
};