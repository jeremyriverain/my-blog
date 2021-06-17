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
      preset: 'lighthouse:recommended',
      assertions: {
        bypass: 'off',
        'color-contrast': 'off',
        'errors-in-console': 'off',
        'first-contentful-paint': 'off',
        'first-cpu-idle': 'off',
        'first-meaningful-paint': 'off',
        'font-display': 'off',
        interactive: 'off',
        label: 'off',
        'largest-contentful-paint': 'off',
        'legacy-javascript': 'off',
        'max-potential-fid': 'off',
        'non-composited-animations': 'off',
        'render-blocking-resources': 'off',
        'unsized-images': 'off',
        'unused-css-rules': 'off',
        'unused-javascript': 'off',
        'speed-index': 'off',
        'uses-responsive-images': 'off',
        'uses-webp-images': 'off',
        'valid-source-maps': 'off'
      }
    }
  }
}
