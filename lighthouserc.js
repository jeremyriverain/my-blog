module.exports = {
  collect: {
    url: ['http://localhost:3000/'],
    startServerCommand: 'yarn run start'
  },
  ci: {
    upload: {
      target: 'temporary-public-storage'
    },
    assert: {
      preset: 'lighthouse:recommended'
    }
  }
}
