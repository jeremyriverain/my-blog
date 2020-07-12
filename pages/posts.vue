<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div>Posts</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PagePosts',
  components: {},
  asynData(context) {
    return context.app.$storyapi
      .get('cdn/stories?starts_with=posts/', {
        version: 'draft'
      })
      .then((res) => {
        return res.data
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
  }
}
</script>

<style></style>
