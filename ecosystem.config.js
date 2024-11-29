module.exports = {
  apps: [
    {
      name: "WEB-Jouskaio.me", // Nom de l'application dans PM2
      script: "yarn", // Utilise Yarn à la place de npm
      args: "start", // Spécifie la commande "start" de Yarn
      instances: "max", // Utilisation de tous les cœurs CPU disponibles
      exec_mode: "cluster", // Mode cluster pour maximiser les performances
      env: {
        NODE_ENV: "development", // Variables d'environnement pour développement
      },
      env_production: {
        NODE_ENV: "production", // Variables d'environnement pour production
      },
    },
  ],
};
