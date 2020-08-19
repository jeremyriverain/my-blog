<template>
  <div class="tags">
    <filter-tag
      v-if="tags.length > 0"
      :color="activeTag === null ? 'is-dark' : ''"
      @click="$emit('input', null)"
      >Show all</filter-tag
    >
    <filter-tag
      v-for="tag in tags"
      :key="tag.name"
      :color="activeTag === tag.name ? 'is-dark' : ''"
      @click="$emit('input', tag.name)"
      >{{ tag.name }}</filter-tag
    >
  </div>
</template>

<script>
export default {
  name: 'FilterTags',
  props: {
    tags: {
      type: Array,
      required: true,
      default: () => []
    },
    activeTag: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="sass" scoped>
.tag
	cursor: pointer
</style>
