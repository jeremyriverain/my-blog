<template>
  <article v-if="localShow" class="message" :class="color">
    <div class="message-body">
      {{ body }}
    </div>
  </article>
</template>

<script>
export default {
  name: 'FlashMessage',
  props: {
    body: {
      type: String,
      required: true
    },
    show: {
      type: Number,
      required: true
    },
    color: {
      // https://bulma.io/documentation/components/message/#colors
      type: String,
      default: 'is-success'
    }
  },
  data() {
    return {
      localShow: false
    }
  },
  watch: {
    show: {
      immediate: false,
      handler: 'showMessage'
    }
  },
  methods: {
    showMessage() {
      this.localShow = true
    }
  }
}
</script>
