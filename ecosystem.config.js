module.exports = {
  apps: [
    {
      name: "node-tree-explorer",
      script: "pnpm",
      args: "start",
      interpreter: "bash",
      env: {
        PORT: 3004,
      },
    },
  ],
};
