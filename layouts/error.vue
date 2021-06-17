<template>
  <section class="hero has-background-transparent">
    <div class="hero-body">
      <p class="title">
        <span v-if="error.statusCode === 404">Page not found</span>
        <span v-else>An error occurred</span>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  layout: 'error'
}
</script>
