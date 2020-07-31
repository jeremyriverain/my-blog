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
import BaseTag from '~/components/BaseTag'
export default {
  components: {
    BaseTag
  },
  props: {
    tags: {
      type: Array,
      required: true
    }
  }
}
</script>
