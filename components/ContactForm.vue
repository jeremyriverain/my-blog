<template>
  <form novalidate @submit.prevent="onSubmit">
    <div class="field">
      <label class="label">First name</label>
      <div class="control">
        <input
          v-model.trim="$v.form.firstName.$model"
          class="input"
          type="text"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Last name</label>
      <div class="control">
        <input
          v-model.trim="$v.form.lastName.$model"
          class="input"
          type="text"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          v-model.trim="$v.form.email.$model"
          class="input is-danger"
          type="email"
          inputmode="email"
        />
        <span class="icon is-left is-small">
          <!-- <ion-icon name="mail-outline"></ion-icon> -->
        </span>
        <span class="icon is-right has-text-danger">
          <!-- <ion-icon name="alert-circle-outline"></ion-icon> -->
        </span>
      </div>
      <p class="help is-danger">This email is invalid</p>
    </div>

    <div class="field">
      <label class="label">Phone number</label>
      <div class="control">
        <input
          v-model.trim="$v.form.phoneNumber.$model"
          class="input"
          type="text"
          inputmode="phone"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Message</label>
      <div class="control">
        <textarea
          v-model.trim="$v.form.message.$model"
          class="textarea"
        ></textarea>
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
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'ContactForm',
  components: {},
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('on submit')
      this.$v.$touch()
      if (this.$v.$invalid) {
        console.log('invalid')
      } else {
        console.log('valid')
      }
    }
  },
  validations: {
    form: {
      firstName: {
        required,
        maxLength: maxLength(100)
      },
      lastName: {
        required,
        maxLength: maxLength(100)
      },
      email: {
        required,
        email,
        maxLength: maxLength(150)
      },
      phoneNumber: {
        required,
        maxLength: maxLength(30)
      },
      message: {
        required
      }
    }
  }
}
</script>
