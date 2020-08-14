<template>
  <nav class="pagination is-small" role="navigation" aria-label="pagination">
    <nuxt-link
      v-if="previousPage"
      class="pagination-previous"
      :to="'/' + previousPage.value.cached_url"
    >
      <span class="icon">
        <span class="material-icons">
          arrow_left
        </span>
      </span>
      <span>{{ previousPage.label }}</span>
    </nuxt-link>
    <nuxt-link
      v-if="nextPage"
      class="pagination-next"
      :to="'/' + nextPage.value.cached_url"
    >
      <span>{{ nextPage.label }}</span>
      <span class="icon">
        <span class="material-icons">
          arrow_right
        </span>
      </span>
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  props: {
    previousPage: {
      type: Object,
      default: null
    },
    nextPage: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="sass" scoped>
.pagination
    flex-wrap: wrap
.pagination-previous, .pagination-next
    text-decoration: none
</style>
