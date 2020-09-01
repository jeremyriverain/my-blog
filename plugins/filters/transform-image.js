import Vue from 'vue'

Vue.filter('transformImage', (val) => {
  if (!val.filename) {
    return ''
  }
  const filename = val.filename
  const extension = filename.split('.').pop()
  if (extension === 'svg') {
    return filename
  }

  return filename.replace(
    /a\.storyblok\.com\//g,
    'img2.storyblok.com/%filter%/'
  )
})
