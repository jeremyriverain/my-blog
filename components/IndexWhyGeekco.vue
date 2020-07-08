<template>
  <section class="hero">
    <div class="hero-body">
      <div :class="$style.container">
        <div>
          <p class="is-size-4 has-text-weight-bold">
            Why Geekco ?
          </p>
          <p :class="$style.body">
            Well, I called this website Geekco because, few years ago, I spent
            some time in Reunion Islands. <br />
            This is where I started learning about programming, as an
            autodidact.
          </p>
          <p :class="$style.body">
            Actually, the gekco is the emblematic animal of this region.<br />
            The name of this website is like a reminder for me. It reminds me
            where my passion about programming began.
          </p>
        </div>

        <div>
          <img
            src="https://via.placeholder.com/300x200"
            class="is-block"
            :class="$style.image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" module>
.container
    display: flex
    justify-content: center
    align-items: center
    & * + *
        margin-left: 0.5rem
.body
    margin-top: 0.5rem
.image
    height: auto
</style>
