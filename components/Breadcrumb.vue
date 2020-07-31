<template>
  <nav
    class="breadcrumb is-small"
    aria-label="breadcrumbs"
    :class="$style.breadcrumb"
  >
    <ul>
      <li v-for="(link, i) in links" :key="i">
        <nuxt-link :to="link.value" :class="$style.link">
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

<style lang="sass" module>
.breadcrumb .link
    text-decoration: none
</style>
