<template>
  <div>
    <IndexProfile />
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <Experiences class="column" />
          <Skills class="column" />
        </div>
      </div>
    </section>
    <IndexWhyGeekco />
  </div>
</template>

<script>
import Experiences from '~/components/Experiences'
import IndexProfile from '~/components/IndexProfile'
import IndexWhyGeekco from '~/components/IndexWhyGeekco'
import Skills from '~/components/Skills'
export default {
  name: 'PageIndex',
  components: {
    Experiences,
    IndexProfile,
    IndexWhyGeekco,
    Skills
  }
}
</script>

<style></style>
