<template>
  <section class="section">
    <div class="container">
      <div class="container columns">
        <div class="column is-6-tablet">
          <div class="is-flex">
            <figure class="image is-32x32">
              <img
                src="~/assets/images/lizard.svg"
                class="is-rounded"
                :class="$style.image"
              />
            </figure>
            <p class="is-size-4 has-text-weight-bold ml-2">
              Why Geekco ?
            </p>
          </div>
          <p :class="$style.body">
            Well, I called this website Geekco because, few years ago, I spent
            some time in Reunion Islands. This is where I started learning about
            programming, as an autodidact. Actually, the gekco is the emblematic
            animal of this region.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" module>
.body
    margin-top: 0.5rem
.image
    height: auto
    width: 100%
</style>
