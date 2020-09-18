<template>
  <a class="button" @click="onClick">
    <span class="icon">
      <span class="material-icons">
        picture_as_pdf
      </span>
    </span>
    <span class="ml-1">
      Resume
    </span>
  </a>
</template>

<script>
import { saveAs } from 'file-saver'

export default {
  name: 'ResumeButton',
  data() {
    return {
      endpoint: '/.netlify/functions/get-resume'
    }
  },
  methods: {
    onClick() {
      saveAs(this.endpoint)
    }
  }
}
</script>
