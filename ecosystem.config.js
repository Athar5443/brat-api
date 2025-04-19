//pm2 config file

module.exports = {
  apps: [
    {
      name: "brat",
      script: "app.js",
      watch: true
    }
  ]
};
