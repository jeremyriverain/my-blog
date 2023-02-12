<script lang="ts" setup>
interface FormData {
  email: string;
  "form-name": "contact";
  message: string;
  name: string;
  phoneNumber: string;
  subject: string;
}

function encode(data: FormData) {
  return Object.keys(data)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(
          data[key as keyof FormData]
        )}`
    )
    .join("&");
}

function onSubmit(data: FormData) {
  console.log(data);
  const payload = encode(data);
  console.log("payload", payload);

  try {
    const config = useRuntimeConfig();
    useFetch(config.public.content.host + "/contact/", {
      method: "POST",
      body: payload,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    console.log('valid', config)
  } catch (error) {
    console.log(error)
    console.log('error')
  }
}
</script>
<template>
  <FormKit
    type="form"
    name="contact"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit="onSubmit"
    submit-label="Send the message"
  >
    <FormKit type="hidden" name="form-name" value="contact" />
    <FormKit
      type="text"
      name="name"
      id="name"
      label="Your name"
      validation="required"
      validation-visibility="dirty"
      placeholder="“John Doe”"
    />
    <FormKit
      type="email"
      name="email"
      id="email"
      label="Email"
      validation="required|email"
      validation-visibility="dirty"
    />

    <FormKit
      type="tel"
      name="phoneNumber"
      id="phoneNumber"
      label="Phone number"
      validation="required"
      validation-visibility="dirty"
    />

    <FormKit
      type="text"
      name="subject"
      id="subject"
      label="Subject"
      validation="required"
      validation-visibility="dirty"
    />

    <FormKit
      type="textarea"
      name="message"
      id="message"
      label="Message"
      validation="required"
      validation-visibility="dirty"
    />
  </FormKit>
</template>
