<template>
  <form>
    <div class="field">
      <label class="label">First name</label>
      <div class="control">
        <input class="input" type="text" />
      </div>
    </div>
    <div class="field">
      <label class="label">Last name</label>
      <div class="control">
        <input class="input" type="text" />
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input is-danger"
          type="email"
          placeholder="Email input"
          value="hello@"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-exclamation-triangle"></i>
        </span>
      </div>
      <p class="help is-danger">This email is invalid</p>
    </div>

    <div class="field">
      <label class="label">Phone number</label>
      <div class="control">
        <input class="input" type="text" />
      </div>
    </div>

    <div class="field">
      <label class="label">Message</label>
      <div class="control">
        <textarea class="textarea" placeholder="Textarea"></textarea>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <button class="button is-primary is-rounded" type="submit">
          Send
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>
