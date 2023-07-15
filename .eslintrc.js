module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config`
  extends: ['@polcraz/eslint-config'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}
