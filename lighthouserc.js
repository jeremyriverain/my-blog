module.exports = {
    ci: {
      collect: {
        url: [
          'http://localhost:3000/',
          'http://localhost:3000/contact/',
          'http://localhost:3000/posts/',
          'http://localhost:3000/posts/formkit'
        ],
        startServerCommand: 'pnpm preview',
        numberOfRuns: 1
      },
      upload: {
        target: 'filesystem',
        outputDir: 'lighthouseci'
      },
      assert: {
        preset: 'lighthouse:recommended',
        assertions: {
          // 'valid-source-maps': 'off'
        }
      }
    }
  }