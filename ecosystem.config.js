module.exports = {
  apps: [
    {
      name: "WEB-Jouskaio.me",
      script: "yarn",
      args: "start",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "development", // Variables d'environnement pour développement
      },
      env_production: {
        NODE_ENV: "production", // Variables d'environnement pour production
      },
    },
  ],
};
