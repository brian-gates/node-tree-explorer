module.exports = {
  apps: [
    {
      name: "node-tree-explorer",
      script: "pnpm",
      args: "start",
      env: {
        PORT: 3004,
      },
    },
  ],
};
