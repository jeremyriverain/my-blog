// https://www.dawntraoz.com/blog/my-web-performance-journey-with-nuxt-storyblok-netlify
module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/contact/',
        'http://localhost:3000/posts/',
        'http://localhost:3000/posts/en/how-to-use-gitlab-ci-and-php-stan-to-improve-code-quality-in-your-symfony-project/',
        'http://localhost:3000/projects/',
        'http://localhost:3000/projects/klubin/'
      ],
      startServerCommand: 'yarn run start'
    },
    upload: {
      target: 'temporary-public-storage'
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'bootup-time': 'off',
        bypass: 'off',
        'color-contrast': 'off',
        'csp-xss': 'off',
        'cumulative-layout-shift': 'off',
        'efficient-animated-content': 'off',
        'errors-in-console': 'off',
        'first-contentful-paint': 'off',
        'first-cpu-idle': 'off',
        'first-meaningful-paint': 'off',
        'font-display': 'off',
        'heading-order': 'off',
        interactive: 'off',
        'mainthread-work-breakdown': 'off',
        'modern-image-formats': 'off',
        'largest-contentful-paint': 'off',
        'link-name': 'off',
        'max-potential-fid': 'off',
        'non-composited-animations': 'off',
        'offscreen-images': 'off',
        'render-blocking-resources': 'off',
        'unsized-images': 'off',
        'speed-index': 'off',
        'splash-screen': 'off',
        'tap-targets': 'off',
        'themed-omnibox': 'off',
        'total-byte-weight': 'off',
        'unused-javascript': 'off',
        'uses-long-cache-ttl': 'off',
        'uses-passive-event-listeners': 'off',
        'uses-rel-preconnect': 'off',
        'uses-responsive-images': 'off',
        'uses-webp-images': 'off',
        'valid-source-maps': 'off'
      }
    }
  }
}
