<template>
  <div data-aos="fade-up-right">
    <div class="has-background-dark px-3 py-3 has-text-white">
      <div class="is-size-5 has-text-weight-bold">/** {{ subtitle }} */</div>
      <h2 class="is-size-3 has-text-weight-bold has-text-white">
        <slot />
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GeekTitle',
  props: {
    subtitle: {
      type: String,
      required: true
    }
  }
}
</script>
