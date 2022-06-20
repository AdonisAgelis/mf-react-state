module.exports = {
  name: 'remote',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
