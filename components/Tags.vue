<template>
  <div class="tags">
    <base-tag
      v-for="(tag, i) in tags"
      :key="tag"
      :label="'#' + tag"
      :color-class="i % 2 === 0 ? 'is-info is-light' : 'is-primary is-light'"
    />
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true
    }
  }
}
</script>
