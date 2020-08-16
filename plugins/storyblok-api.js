import Storyblok from '~/storyblok-client'
export default ({ app }, inject) => {
  // Défini la fonction directement dans l'objet context.app
  app.$storyblokApi = Storyblok
}
