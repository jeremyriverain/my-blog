<template>
  <div class="g-container">
    <a
      v-if="appLink"
      :href="appLink"
      target="_blank"
      rel="noopener"
      class="button mx-1 my-1"
    >
      <span class="icon">
        <span class="material-icons">
          launch
        </span>
      </span>
      <span>
        Visit website
      </span>
    </a>
    <div v-if="appleStoreLink || playStoreLink" class="g-stores">
      <a
        v-if="appleStoreLink"
        :href="appleStoreLink"
        target="_blank"
        rel="noopener"
        class="mx-1 my-1 g-store"
        ><img width="140" src="/apple-store.svg" alt=""
      /></a>
      <a
        v-if="playStoreLink"
        :href="playStoreLink"
        target="_blank"
        rel="noopener"
        class="mx-1 my-1 g-store"
        ><img width="160" src="/play-store.png" alt=""
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioLinks',
  props: {
    appLink: {
      type: String
    },
    appleStoreLink: {
      type: String
    },
    playStoreLink: {
      type: String
    }
  }
}
</script>

<style lang="sass" scoped>
.g-container
  display: flex
  align-items: center
  justify-content: space-between
  flex-wrap: wrap
  .g-stores
    display: flex
    align-items: center
    justify-content: space-between
  .g-store
    font-size: 0em
</style>
