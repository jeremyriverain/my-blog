<template>
  <div class="has-text-justified content g-content" v-html="content" />
</template>

<script>
export default {
  name: 'ContentSection',
  props: {
    content: {
      type: String
    }
  }
}
</script>
