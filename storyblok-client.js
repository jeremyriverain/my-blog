const StoryblokClient = require('storyblok-js-client')

export default new StoryblokClient({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  cache: {
    clear: 'auto',
    type: 'memory'
  }
})
