<template>
  <div class="section">
    <div class="container">
      <h1 class="is-size-4 has-text-weight-bold">{{ post.content.title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagePost',
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/posts/' + context.params.slug)
      .then((res) => {
        console.log(res.data)
        return { post: res.data.story }
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
      post: {}
    }
  }
}
</script>
