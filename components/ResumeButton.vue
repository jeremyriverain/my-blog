<template>
  <a
    class="button"
    href="https://a.storyblok.com/f/88570/x/34fcbac541/jeremy_riverain_resume_web.pdf"
    target="_blank"
  >
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
