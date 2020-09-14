<template>
  <div class="section mt-3">
    <div class="container">
      <div class="columns">
        <div class="column is-two-fifths">
          <div class="media">
            <figure class="media-left">
              <p class="image is-48x48">
                <img
                  src="~/assets/images/avatar.png"
                  alt="portrait Jérémy Riverain "
                />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>Jérémy Riverain</strong>
                  <small>Fullstack Developer</small><br />
                  Graduated in sport, I have ended up being developer by
                  passion. Essentially autodidact, I worked a lot with Symfony
                  and Vuejs.<br />
                  I have experience in making websites, APIs, mobile apps and
                  PWAs.
                </p>
              </div>

              <social-links />
            </div>
          </div>
        </div>
        <div class="column ">
          <!-- <h1 class="is-size-4 has-text-weight-bold title-black-block">
            Contact
          </h1> -->

          <vue-typed-js
            :back-speed="50"
            smart-backspace
            auto-insert-css
            content-type="html"
            :strings="['Contact']"
          >
            <h1
              class="is-size-3 has-text-weight-bold mb-1 typing title-black-block"
            ></h1
          ></vue-typed-js>
          <contact-form class="mt-3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from '~/components/ContactForm'
import SocialLinks from '~/components/SocialLinks'
export default {
  name: 'PageContact',
  components: {
    ContactForm,
    SocialLinks
  },
  head() {
    return {
      title: 'Contact - Jérémy Riverain - Developer'
    }
  }
}
</script>

<style></style>
