<template>
  <div class="section">
    <div class="container mx-auto" :class="$style.container">
      <h1 class="is-size-4 has-text-weight-bold">
        {{ project.content.name }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagePost',
  // scrollToTop: true,
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/projects/' + context.params.slug)
      .then((res) => {
        console.log(res.data)
        return { project: res.data.story }
      })
      .catch((res) => {
        if (!res.response) {
          console.error(res)
          context.error({
            statusCode: 404,
            message: 'Failed to receive content form api'
          })
        } else {
          console.error(res.response.data)
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          })
        }
      })
  },
  data() {
    return {
      project: {}
    }
  },
  head() {
    return {
      title: this.project.content.name + ' | Portfolio Geekco'
    }
  }
}
</script>

<style lang="sass" module>
.container
  max-width: 768px
</style>
