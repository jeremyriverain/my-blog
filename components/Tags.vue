<template>
  <div class="tags">
    <base-tag
      v-for="tag in tags"
      :key="tag"
      :label="'#' + tag"
      color-class="is-info is-light"
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
