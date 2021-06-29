<template>
  <nav class="breadcrumb is-small g-breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li v-for="(link, i) in links" :key="i">
        <nuxt-link :to="link.value" class="g-link">
          <span v-if="link.icon" class="icon is-small">
            <span class="material-icons">
              {{ link.icon }}
            </span>
          </span>
          <span>{{ link.label }}</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.g-breadcrumb .g-link
    text-decoration: none
</style>
