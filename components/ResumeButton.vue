<template>
  <button class="button" @click="onClick">
    <span class="icon">
      <span class="material-icons">
        picture_as_pdf
      </span>
    </span>
    <span class="ml-1">
      Resume
    </span>
  </button>
</template>

<script>
export default {
  name: 'ResumeButton',
  data() {
    return {
      endpoint: '/.netlify/functions/get-resume'
    }
  },
  methods: {
    onClick() {
      this.$axios
        .$get(this.endpoint)
        .then((r) => {
          console.log(r)
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>
