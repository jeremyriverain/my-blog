module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/contact',
        'http://localhost:3000/posts',
        'http://localhost:3000/posts/en/how-to-use-gitlab-ci-and-php-stan-to-improve-code-quality-in-your-symfony-project',
        'http://localhost:3000/projects',
        'http://localhost:3000/projects/klubin'
      ],
      startServerCommand: 'yarn run start'
    },
    upload: {
      target: 'temporary-public-storage'
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'bootup-time': 'warn',
        bypass: 'warn',
        'color-contrast': 'warn',
        'csp-xss': 'warn',
        'cumulative-layout-shift': 'warn',
        'efficient-animated-content': 'warn',
        'errors-in-console': 'warn',
        'first-contentful-paint': 'warn',
        'first-cpu-idle': 'warn',
        'first-meaningful-paint': 'warn',
        'font-display': 'warn',
        'heading-order': 'warn',
        interactive: 'warn',
        'mainthread-work-breakdown': 'warn',
        'modern-image-formats': 'warn',
        'largest-contentful-paint': 'warn',
        'legacy-javascript': 'warn',
        'link-name': 'warn',
        'max-potential-fid': 'warn',
        'non-composited-animations': 'warn',
        'offscreen-images': 'warn',
        'render-blocking-resources': 'warn',
        'unsized-images': 'warn',
        'speed-index': 'warn',
        'splash-screen': 'warn',
        'tap-targets': 'warn',
        'themed-omnibox': 'warn',
        'total-byte-weight': 'warn',
        'unused-css-rules': 'warn',
        'unused-javascript': 'warn',
        'uses-long-cache-ttl': 'warn',
        'uses-passive-event-listeners': 'warn',
        'uses-rel-preconnect': 'warn',
        'uses-responsive-images': 'warn',
        'uses-webp-images': 'warn',
        'valid-source-maps': 'warn'
      }
    }
  }
}
