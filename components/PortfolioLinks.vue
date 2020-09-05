<template>
  <div :class="$style.container">
    <button class="button mx-1 my-1">
      <span class="icon">
        <span class="material-icons">
          launch
        </span>
      </span>
      <span>
        Visit website
      </span>
    </button>
    <div :class="$style.stores">
      <a href="#" :class="$style.store" class="mx-1 my-1"
        ><img width="140" src="/apple-store.svg" alt="link download app"
      /></a>
      <a href="#" :class="$style.store" class="mx-1 my-1"
        ><img width="160" src="/play-store.png" alt="link download app"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioLinks'
}
</script>

<style lang="sass" module>
.container
  display: flex
  align-items: center
  justify-content: space-between
  flex-wrap: wrap
  .stores
    display: flex
    align-items: center
    justify-content: space-between
  .store
    font-size: 0em
</style>
