window.addEventListener('beforeinstallprompt', (e) => {
  console.log('preventing prompt install')
  e.preventDefault()
})
