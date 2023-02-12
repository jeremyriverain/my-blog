<template>
  <FormKit type="form" data-netlify="true" data-netlify-honeypot="bot-field">
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
